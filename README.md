<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Standard Deviation

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Bradford][bradford-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [Bradford][bradford-distribution] random variable is

<!-- <equation class="equation" label="eq:bradford_stdev" align="center" raw="\sigma = \sqrt{\frac{(c+2) \ln(1+c) - 2c}{2c (\ln(1+c))^2}}" alt="Standard deviation for a Bradford distribution."> -->

```math
\sigma = \sqrt{\frac{(c+2) \ln(1+c) - 2c}{2c (\ln(1+c))^2}}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma = \sqrt{\frac{(c+2) \ln(1+c) - 2c}{2c (\ln(1+c))^2}}" data-equation="eq:bradford_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bradford/stdev/docs/img/equation_bradford_stdev.svg" alt="Standard deviation for a Bradford distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `c` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-bradford-stdev
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats-base-dists-bradford-stdev' );
```

#### stdev( c )

Returns the [standard deviation][standard-deviation] of a [Bradford][bradford-distribution] distribution with shape parameter `c`.

```javascript
var v = stdev( 0.1 );
// returns ~0.289

v = stdev( 10.0 );
// returns ~0.276
```

If provided a shape parameter `c <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 0.0 );
// returns NaN

v = stdev( -1.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var stdev = require( '@stdlib/stats-base-dists-bradford-stdev' );

var opts = {
    'dtype': 'float64'
};
var c = uniform( 10, 0.1, 10.0, opts );

logEachMap( 'c: %0.4f, SD(X;c): %0.4f', c, stdev );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/bradford/stdev.h"
```

#### stdlib_base_dists_bradford_stdev( c )

Returns the standard deviation of a Bradford distribution with shape parameter `c`.

```c
double y = stdlib_base_dists_bradford_stdev( 0.5 );
// returns ~0.288
```

The function accepts the following arguments:

-   **c**: `[in] double` shape parameter.

```c
double stdlib_base_dists_bradford_stdev( const double c );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/bradford/stdev.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double c;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        c = random_uniform( 0.01, 10.0 );
        y = stdlib_base_dists_bradford_stdev( c );
        printf( "c: %lf, SD(X;c): %lf\n", c, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-bradford-stdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-bradford-stdev

[test-image]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-bradford-stdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-bradford-stdev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-bradford-stdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-bradford-stdev/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-bradford-stdev/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-bradford-stdev/main/LICENSE

[bradford-distribution]: https://en.wikipedia.org/wiki/Bradford%27s_law

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
