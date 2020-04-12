git checkout master
ng build --prod --base-href '/ng-bottom-navigation/'

git checkout gh-pages  || exit

rm *.txt
rm *.ico
rm *.js
rm *.css
rm *.html

cp -r dist/example-app/* .

git add .
git commit -m "Updated github pages"

git checkout master
