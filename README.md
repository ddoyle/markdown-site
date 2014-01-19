# How to Run

1. Set up [perlbrew](http://perlbrew.pl)
2. Pull this repository
3. Change into the main directory and run `carton install`
4. To test, run `carton exec -Ilocal/lib/perl5 -Ilib -- plackup bin/app.pl`
