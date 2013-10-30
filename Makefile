SHELL := /bin/bash

update-404:
	cp _404.html 404.html
	jekyll build
	awk "/<\!DOCTYPE html>/{print;print \"<!--Built at $$(date +"%F %T")-->\";next}1" _site/404.html > 404.html

.PHONY: update-404
