<h1 class="firstHeading" id="firstHeading" lang="en">Pascal&#39;s triangle</h1>
<div class="mw-body-content" id="bodyContent">
	<div class="noprint" id="siteSub"><a href="https://en.wikipedia.org/wiki/Pascal%27s_triangle" rel="noopener noreferrer" target="_blank">From Wikipedia, the free encyclopedia</a></div>

	<p>
		<br>
	</p>
	<div id="contentSub">
		<br>
	</div>
	<div id="jump-to-nav">
		<div class="mw-parser-output">
			<div class="thumb tright">
				<div class="thumbinner" style="width: 222px; text-align: center;">
					<a class="image" href="/wiki/file:PascalTriangleAnimated2.gif"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/PascalTriangleAnimated2.gif/220px-PascalTriangleAnimated2.gif" width="220" height="203" class="thumbimage fr-fic fr-dib" srcset="//upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif 1.5x" data-file-width="260" data-file-height="240"></a>
					<div class="thumbcaption" style="line-height: 1;">
						<div class="magnify">
							<a href="/wiki/file:PascalTriangleAnimated2.gif" class="internal" title="Enlarge"></a>
						</div><span style="font-size: 11px;">In Pascal&#39;s triangle, each number is the sum of the two numbers directly above it.</span></div>

					<p>
						<br>
					</p>
				</div>
			</div>

			<p style="text-align: justify;">In <a href="/wiki/Mathematics" title="Mathematics">mathematics</a>, <strong>Pascal&#39;s triangle</strong> is a <a href="/wiki/Triangular_array" title="Triangular array">triangular array</a> of the <a href="/wiki/Binomial_coefficient" title="Binomial coefficient">binomial coefficients</a>. In much of the <a href="/wiki/Western_world" title="Western world">Western world</a>, it is named after the French mathematician <a href="/wiki/Blaise_Pascal" title="Blaise Pascal">Blaise Pascal</a>, although other mathematicians studied it centuries before him in <a href="/wiki/India" title="India">India</a>,<sup class="reference" id="cite_ref-1"><a href="#cite_note-1"></a></sup> <a href="/wiki/Iran" title="Iran">Persia</a> (Iran)<sup class="reference" id="cite_ref-2"><a href="#cite_note-2"></a></sup>, <a href="/wiki/China" title="China">China</a>, <a href="/wiki/Germany" title="Germany">Germany</a>, and <a href="/wiki/Italy" title="Italy">Italy</a>.<sup class="reference" id="cite_ref-roots_3-0"><a href="#cite_note-roots-3"></a></sup></p>

			<p style="text-align: justify;">The rows of Pascal&#39;s triangle are conventionally enumerated starting with row <em>n</em> = 0 at the top (the 0th row). The entries in each row are numbered from the left beginning with <em>k</em> = 0 and are usually staggered relative to the numbers in the adjacent rows. The triangle may be constructed in the following manner: In row 0 (the topmost row), there is a unique nonzero entry 1. Each entry of each subsequent row is constructed by adding the number above and to the left with the number above and to the right, treating blank entries as 0. For example, the initial number in the first (or any other) row is 1 (the sum of 0 and 1), whereas the numbers 1 and 3 in the third row are added to produce the number 4 in the fourth row.</p>

			<h2><span class="mw-headline" id="Formula">Formula</span><span class="mw-editsection"><a href="/w/index.php?title=Pascal%27s_triangle&action=edit&section=1" title="Edit section: Formula"></a></span></h2>
			<div class="thumb tright">
				<div class="thumbinner" style="width:302px;">
					<a class="image" href="/wiki/file:Pascal_triangle_small.png"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pascal_triangle_small.png/300px-Pascal_triangle_small.png" width="300" height="135" class="thumbimage fr-fic fr-dib" srcset="//upload.wikimedia.org/wikipedia/commons/c/ca/Pascal_triangle_small.png 1.5x" data-file-width="364" data-file-height="164"></a>
					<div class="thumbcaption" style="text-align: center;">
						<div class="magnify">
							<a href="/wiki/file:Pascal_triangle_small.png" class="internal" title="Enlarge"></a>
						</div><span style="font-size: 11px;">A diagram that shows Pascal&#39;s triangle with rows 0 through 7.</span></div>

					<p>
						<br>
					</p>
				</div>
			</div>

			<p>The entry in the <em>n</em>th row and <em>k</em>th column of Pascal&#39;s triangle is denoted with:</p>

			<p><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/206415d3742167e319b2e52c2ca7563b799abad7" class="mwe-math-fallback-image-inline fr-fic fr-dib fr-fil" style="width: 3.116ex; height: 3.176ex;" alt="{\tbinom {n}{k}}"></p>

			<p>
				<br>
			</p>

			<p><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;">( n k ) {\displaystyle {\tbinom {n}{k}}}&nbsp;</span></span>For example, the unique nonzero entry in the topmost row is <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;">&nbsp;( 0 0 ) = 1 {\displaystyle {\tbinom {0}{0}}=1}&nbsp;</span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b7e35f86368d5978b46c07fd6dddca86bd6e635c" class="mwe-math-fallback-image-inline fr-fic fr-dib fr-fil" style="width: 7.213ex; height: 3.509ex;" alt="{\tbinom {0}{0}}=1"></span>
			</p>

			<p>
				<br>
			</p>

			<p>With this notation, the construction of the previous paragraph may be written as follows:</p>

			<dl>
				<dd><span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;">&nbsp;( n k ) = ( n &minus;<!-- − --> 1 k &minus;<!-- − --> 1 ) + ( n &minus;<!-- − --> 1 k ) {\displaystyle {n \choose k}={n-1 \choose k-1}+{n-1 \choose k}}&nbsp;</span><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/203b128a098e18cbb8cf36d004bd7282b28461bf" class="mwe-math-fallback-image-inline fr-fic fr-dib" style="width: 28.392ex; height: 6.176ex;" alt="{n \choose k}={n-1 \choose k-1}+{n-1 \choose k}"></span>,</dd>
			</dl>

			<p style="text-align: justify;">for any non-negative integer <em>n</em> and any integer <em>k</em> between 0 and <em>n</em>, inclusive.<sup class="reference" id="cite_ref-4"><a href="#cite_note-4"></a></sup> This recurrence for the binomial coefficients is known as <a href="/wiki/Pascal%27s_rule" title="Pascal's rule">Pascal&#39;s rule</a>.</p>

			<p style="text-align: justify;">Pascal&#39;s triangle has higher <a href="/wiki/Dimension" title="Dimension">dimensional</a> generalizations. The three-dimensional version is called <em><a href="/wiki/Pascal%27s_pyramid" title="Pascal's pyramid">Pascal&#39;s pyramid</a></em> or <em>Pascal&#39;s tetrahedron</em>, while the general versions are called <em><a href="/wiki/Pascal%27s_simplex" title="Pascal's simplex">Pascal&#39;s simplices</a></em>.</p>
		</div>
	</div>
</div>
