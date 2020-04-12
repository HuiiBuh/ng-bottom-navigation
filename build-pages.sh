git checkout master
npm install
ng build --prod --base-href '/ng-bottom-navigation/'

mv dist/example-app/ example-app
git add example-app/

git checkout gh-pages

# shellcheck disable=SC2035
rm *.txt  || echo ''
rm *.ico  || echo ''
rm *.js   || echo ''
rm *.css  || echo ''
rm *.html || echo ''

mv example-app/* .
git reset example-app/
rm -r example-app

git add .
git commit -m "Updated github pages"

git checkout master
