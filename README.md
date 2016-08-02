A trivial minimal reproduction of a firebase-tools bug where bolt rules aren't being uploaded correctly.

Create a new firebase project, run `firebase init` and then `node index.js`. With firebase-tools 3.0.4 it'll work, and on 3.0.5 it'll fail.
