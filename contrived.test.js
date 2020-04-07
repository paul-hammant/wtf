const jquery = require('jquery');
const { fork } = require('child_process');

var forked = null;

beforeAll(() => {

    forked = fork('server.js', { silent: true });
    forked.stdout.on('data', function (chunk) {
        console.log("Stdout in child: " + chunk);
    });
});


test('is it ok', () => {
    jquery.ajax({
        async: false,
        type: "GET",
        url: "http://localhost:8765/is-it-ok",
        dataType: "xml",
        success: function (doc, code, response) {
            expect(response.responseText).toBe("ok");
        },
        error: function (data, textStatus, errorThrown) {
            throw new Error('server badness');
        }
    });
});

