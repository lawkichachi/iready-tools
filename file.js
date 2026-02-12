for f in $(git ls-files '*.js'); do echo "---- $f ----"; cat "$f"; done
