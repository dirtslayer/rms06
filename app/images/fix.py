import os, glob
# this python script fixes all the jpg files that are giving the
# Invalid SOS parameters for sequential JPEG error


# events.js:141
#       throw er; // Unhandled 'error' event
#       ^
# Error: Invalid SOS parameters for sequential JPEG
#
#     at ChildProcess.<anonymous> (/home/drd/proj/rms06/node_modules/imagemin-jpegtran/index.js:62:37)
#     at emitTwo (events.js:87:13)
#     at ChildProcess.emit (events.js:172:7)
#     at maybeClose (internal/child_process.js:818:16)
#     at Socket.<anonymous> (internal/child_process.js:319:11)
#     at emitOne (events.js:77:13)
#     at Socket.emit (events.js:169:7)
#     at Pipe._onclose (net.js:469:12)
# events.js:141
#       throw er; // Unhandled 'error' event
#       ^
# Error: Invalid SOS parameters for sequential JPEG
#
#     at ChildProcess.<anonymous> (/home/drd/proj/rms06/node_modules/imagemin-jpegtran/index.js:62:37)
#     at emitTwo (events.js:87:13)
#     at ChildProcess.emit (events.js:172:7)
#     at maybeClose (internal/child_process.js:818:16)
#     at Socket.<anonymous> (internal/child_process.js:319:11)
#     at emitOne (events.js:77:13)
#     at Socket.emit (events.js:169:7)
#     at Pipe._onclose (net.js:469:12)


for fn in  glob.glob('*.jpg'):
     print(fn)
     if os.path.isfile(fn):
        l = os.path.splitext(os.path.basename(fn))
        os.system('gm convert %s %s' % (os.path.basename(fn),os.path.splitext(os.path.basename(fn))[0] + '.png'   ))
        os.system('gm convert %s %s' % (os.path.splitext(os.path.basename(fn))[0] + '.png' , os.path.basename(fn)  ))
        os.system('rm %s' % os.path.splitext(os.path.basename(fn))[0] + '.png' )
