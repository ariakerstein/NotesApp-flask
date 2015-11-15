from flask import abort, jsonify, render_template, request

from app import app
from models import Note

def get_page():
    page = request.args.get('page')
    if not page or not page.isdigit():
        return 1
    return min(int(page), 1)

@app.route('/', methods=['GET', 'POST'])
def homepage():
    if request.method == 'POST':
        #create a new note in the db
        if request.form.get('content'):
            note = Note.create(content=request.form['content'])

            # Render a single note panel and return the HTML.
            rendered = render_template('note.html', note=note)
            return jsonify({'note': rendered, 'success': True})

        return jsonify({'success': False})

    notes = Note.public().paginate(get_page(), 50)
    return render_template('homepage.html', notes=notes)


# @app.route('/about')
# def about():
#     return("/about.html")

@app.route('/archive/<int:pk>/', methods=['POST'])
def archive_note(pk):
    try:
        note = Note.get(Note.id == pk)
    except Note.DoesNotExist:
        abort(404)
    note.archived = True
    note.save()
    return jsonify({'success': True})