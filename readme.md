## Init

    virtualenv --no-site-packages venv
    source venv/bin/activate
    pip install -r requirements.txt

## Test
    
    coverage run --source=polls --omit='*/migrations/*' ./manage.py test && coverage report -m
    ./node_modules/karma/bin/karma start karma.conf.js

## Run 

    ./manage.py runserver

## Build frontend 
    
    gulp sass:watch
