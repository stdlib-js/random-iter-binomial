/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var ceil = require( '@stdlib/math-base-special-ceil' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pkg = require( './../package.json' ).name;
var iterator = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( assert ) {
	var iter;
	var n;
	var p;
	var i;

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		n = ceil( randu()*30.0 );
		p = randu();
		iter = iterator( n, p );
		if ( typeof iter !== 'object' ) {
			assert.fail( 'should return an object' );
		}
	}
	assert.toc();
	if ( typeof iter !== 'object' || typeof iter.next !== 'function' ) {
		assert.fail( 'should return an iterator protocol-compliant object' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});

bench( pkg+'::iteration', function benchmark( assert ) {
	var rand;
	var n;
	var p;
	var z;
	var i;

	n = 10;
	p = 0.3;
	rand = iterator( n, p );

	assert.tic();
	for ( i = 0; i < assert.iterations; i++ ) {
		z = rand.next().value;
		if ( isnan( z ) ) {
			assert.fail( 'should not return NaN' );
		}
	}
	assert.toc();
	if ( isnan( z ) ) {
		assert.fail( 'should not return NaN' );
	}
	assert.pass( 'benchmark finished' );
	assert.end();
});
