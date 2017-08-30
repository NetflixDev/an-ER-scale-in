#!/bin/sh

pid=$(pgrep -f SimpleHTTPServer);
if ! [ -z "$pid" ]
	then
		echo "killing previous SimpleHTTPServer at $pid"
		kill $pid
fi

python -m SimpleHTTPServer &

open -a /Applications/Google\ Chrome.app/ --new --args http://localhost:8000


