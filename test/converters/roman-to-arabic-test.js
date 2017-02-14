'use strict'
var test = require('blue-tape'),
    proxyquire = require('proxyquire'),
    sinon = require('sinon'),
    romanToArabic = require('../../lib/converters/roman-to-arabic')

var map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
}

test('Convert direct Numbers', function (t) {
    for (var numeral in map) {
        t.equal(romanToArabic(numeral),map[numeral])
    }
    t.end()
});

test('Get valid Subgroups', function (t) {
    t.deepEqual(romanToArabic._.getSubgroups('X','XXXIX'),['XXX', 'IX'])
    t.end()
});

