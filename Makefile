SHELL := /bin/bash

update-404:
	cp _404.html 404.html
	jekyll build
	cp _site/404.html 404.html

.PHONY: update-404
