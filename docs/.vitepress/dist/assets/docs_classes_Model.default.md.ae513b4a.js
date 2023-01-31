import{_ as e,c as t,o as a,a as d}from"./app.a96331c1.js";const m=JSON.parse('{"title":"Class: default","description":"","frontmatter":{},"headers":[{"level":2,"title":"Indexable","slug":"indexable","link":"#indexable","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"keyPrefix","slug":"keyprefix","link":"#keyprefix","children":[]},{"level":3,"title":"keyUnique","slug":"keyunique","link":"#keyunique","children":[]},{"level":3,"title":"schema","slug":"schema","link":"#schema","children":[]},{"level":3,"title":"redisClient","slug":"redisclient","link":"#redisclient","children":[]},{"level":3,"title":"flexSchema","slug":"flexschema","link":"#flexschema","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"create","slug":"create","link":"#create","children":[]},{"level":3,"title":"_write","slug":"write","link":"#write","children":[]},{"level":3,"title":"_read","slug":"read","link":"#read","children":[]},{"level":3,"title":"findById","slug":"findbyid","link":"#findbyid","children":[]},{"level":3,"title":"getAll","slug":"getall","link":"#getall","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"deleteById","slug":"deletebyid","link":"#deletebyid","children":[]},{"level":3,"title":"deleteAll","slug":"deleteall","link":"#deleteall","children":[]},{"level":3,"title":"runCommand","slug":"runcommand","link":"#runcommand","children":[]},{"level":3,"title":"generateRedisKey","slug":"generaterediskey","link":"#generaterediskey","children":[]},{"level":3,"title":"createInstance","slug":"createinstance","link":"#createinstance","children":[]}]}],"relativePath":"docs/classes/Model.default.md","lastUpdated":1675123433000}'),r={name:"docs/classes/Model.default.md"},l=d(`<p><a href="./../README.html">metronom</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/Model.html">Model</a> / default</p><h1 id="class-default" tabindex="-1">Class: default <a class="header-anchor" href="#class-default" aria-hidden="true">#</a></h1><p><a href="./../modules/Model.html">Model</a>.default</p><p>Model Class</p><h2 id="indexable" tabindex="-1">Indexable <a class="header-anchor" href="#indexable" aria-hidden="true">#</a></h2><p>▪ [index: <code>string</code>]: <code>any</code></p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./Model.default.html#keyprefix">keyPrefix</a></li><li><a href="./Model.default.html#keyunique">keyUnique</a></li><li><a href="./Model.default.html#schema">schema</a></li><li><a href="./Model.default.html#redisclient">redisClient</a></li><li><a href="./Model.default.html#flexschema">flexSchema</a></li></ul><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Model.default.html#constructor">constructor</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Model.default.html#create">create</a></li><li><a href="./Model.default.html#_write">_write</a></li><li><a href="./Model.default.html#_read">_read</a></li><li><a href="./Model.default.html#findbyid">findById</a></li><li><a href="./Model.default.html#getall">getAll</a></li><li><a href="./Model.default.html#filter">filter</a></li><li><a href="./Model.default.html#deletebyid">deleteById</a></li><li><a href="./Model.default.html#deleteall">deleteAll</a></li><li><a href="./Model.default.html#runcommand">runCommand</a></li><li><a href="./Model.default.html#generaterediskey">generateRedisKey</a></li><li><a href="./Model.default.html#createinstance">createInstance</a></li></ul><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="keyprefix" tabindex="-1">keyPrefix <a class="header-anchor" href="#keyprefix" aria-hidden="true">#</a></h3><p>• <strong>keyPrefix</strong>: <code>String</code></p><p>First part of redis key. It&#39;s identifier for model class</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L31" target="_blank" rel="noreferrer">Model.ts:31</a></p><hr><h3 id="keyunique" tabindex="-1">keyUnique <a class="header-anchor" href="#keyunique" aria-hidden="true">#</a></h3><p>• <strong>keyUnique</strong>: <code>undefined</code> | <code>String</code></p><p>Second part of redis key. It&#39;s identifier for record</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L34" target="_blank" rel="noreferrer">Model.ts:34</a></p><hr><h3 id="schema" tabindex="-1">schema <a class="header-anchor" href="#schema" aria-hidden="true">#</a></h3><p>• <strong>schema</strong>: <a href="./../interfaces/Interfaces.Schema.html"><code>Schema</code></a></p><p>Object struct model</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L37" target="_blank" rel="noreferrer">Model.ts:37</a></p><hr><h3 id="redisclient" tabindex="-1">redisClient <a class="header-anchor" href="#redisclient" aria-hidden="true">#</a></h3><p>• <strong>redisClient</strong>: <a href="./../interfaces/IRedisAdaptor.default.html"><code>default</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L39" target="_blank" rel="noreferrer">Model.ts:39</a></p><hr><h3 id="flexschema" tabindex="-1">flexSchema <a class="header-anchor" href="#flexschema" aria-hidden="true">#</a></h3><p>• <strong>flexSchema</strong>: <code>undefined</code> | <code>Boolean</code></p><p>you can&#39;t define any key except the fields in <code>schema</code>, but if this value is <code>true</code>, you can only add a value to the schema by giving it <code>keyUnique</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L44" target="_blank" rel="noreferrer">Model.ts:44</a></p><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new default</strong>(<code>schema</code>, <code>keyPrefix?</code>, <code>modelOption?</code>)</p><p>Represents a Metronom ORM Model</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>schema</code></td><td style="text-align:left;"><a href="./../interfaces/Interfaces.Schema.html"><code>Schema</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">Record&#39;s key-value schema</td></tr><tr><td style="text-align:left;"><code>keyPrefix</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;object&#39;</code></td><td style="text-align:left;">Record unique key&#39;s prefix. <code>&quot;users:1234&quot;</code> --&gt; &quot;<code>keyPrefix</code>:<code>keyUnique</code>&quot;</td></tr><tr><td style="text-align:left;"><code>modelOption?</code></td><td style="text-align:left;"><a href="./../interfaces/Interfaces.ModelOptions.html"><code>ModelOptions</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">Optional model settings. It&#39;s include 3 key. + <code>keyUnique</code>: it&#39;s unique part of model key + <code>flexSchema</code>: Normally, you can&#39;t define any key except the fields in <code>schema</code>, but if this value is <code>true</code>, you can only add a value to the schema by giving it <code>keyUnique</code> + <code>redisClientOptions</code>: node-redis client options.</td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L60" target="_blank" rel="noreferrer">Model.ts:60</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-hidden="true">#</a></h3><p>▸ <strong>create</strong>(<code>valueObject</code>): <code>Promise</code>&lt;<a href="./ModelInstance.default.html"><code>default</code></a>&gt;</p><p>Creates <code>ModelInstance</code> by parameter then saves it to Redis and returns it</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>valueObject</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">data to be saved according to the <code>Model.schema</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<a href="./ModelInstance.default.html"><code>default</code></a>&gt;</p><p>new ModelInstance</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L105" target="_blank" rel="noreferrer">Model.ts:105</a></p><hr><h3 id="write" tabindex="-1">_write <a class="header-anchor" href="#write" aria-hidden="true">#</a></h3><p>▸ <code>Private</code> <strong>_write</strong>(<code>redisKey</code>, <code>data</code>): <code>Promise</code>&lt;<code>Object</code>&gt;</p><p>Internal record save function</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>redisKey</code></td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;">Redis record key with/without <code>keyUnique</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>Object</code>&gt;</p><p>raw data</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L127" target="_blank" rel="noreferrer">Model.ts:127</a></p><hr><h3 id="read" tabindex="-1">_read <a class="header-anchor" href="#read" aria-hidden="true">#</a></h3><p>▸ <code>Private</code> <strong>_read</strong>(<code>redisKey</code>): <code>Promise</code>&lt;<code>Object</code>&gt;</p><p>Internal read function</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>redisKey</code></td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;">Redis record key with/without <code>keyUnique</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>Object</code>&gt;</p><p>raw data</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L143" target="_blank" rel="noreferrer">Model.ts:143</a></p><hr><h3 id="findbyid" tabindex="-1">findById <a class="header-anchor" href="#findbyid" aria-hidden="true">#</a></h3><p>▸ <strong>findById</strong>(<code>id</code>): <code>Promise</code>&lt;<code>null</code> | <a href="./ModelInstance.default.html"><code>default</code></a>&gt;</p><p>Fetches record by <code>keyUnique</code></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;"><code>keyUnique</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>null</code> | <a href="./ModelInstance.default.html"><code>default</code></a>&gt;</p><p>ModelInstance or null</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L156" target="_blank" rel="noreferrer">Model.ts:156</a></p><hr><h3 id="getall" tabindex="-1">getAll <a class="header-anchor" href="#getall" aria-hidden="true">#</a></h3><p>▸ <strong>getAll</strong>(<code>options?</code>): <code>Promise</code>&lt;[] | <a href="./ModelInstance.default.html"><code>default</code></a>[]&gt;</p><p>Fetches all records with the same <code>keyPrefix</code> value</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><a href="./../interfaces/Interfaces.FilterOptions.html"><code>FilterOptions</code></a></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;[] | <a href="./ModelInstance.default.html"><code>default</code></a>[]&gt;</p><p>List of ModelInstance</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L169" target="_blank" rel="noreferrer">Model.ts:169</a></p><hr><h3 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-hidden="true">#</a></h3><p>▸ <strong>filter</strong>(<code>filterFunction</code>): <code>Promise</code>&lt;[] | <a href="./ModelInstance.default.html"><code>default</code></a>[]&gt;</p><p>Filters in the same way as <code>Array.filter</code>, pulling all records with the same <code>keyPrefix</code> value</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>filterFunction</code></td><td style="text-align:left;"><a href="./../interfaces/Interfaces.FilterFunction.html"><code>FilterFunction</code></a></td><td style="text-align:left;">It takes the values <code>(value, index, array)</code> and returns <code>true</code> then the record is filtered. It can be asynchronous function</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;[] | <a href="./ModelInstance.default.html"><code>default</code></a>[]&gt;</p><p>Filtred ModelInstances or empty array</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L189" target="_blank" rel="noreferrer">Model.ts:189</a></p><hr><h3 id="deletebyid" tabindex="-1">deleteById <a class="header-anchor" href="#deletebyid" aria-hidden="true">#</a></h3><p>▸ <strong>deleteById</strong>(<code>id</code>): <code>Promise</code>&lt;<code>number</code>&gt;</p><p>delete record by <code>keyUnique</code></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;"><code>keyUnique</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>number</code>&gt;</p><p>deleted records count it always &#39;1&#39; if it succesfull</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L208" target="_blank" rel="noreferrer">Model.ts:208</a></p><hr><h3 id="deleteall" tabindex="-1">deleteAll <a class="header-anchor" href="#deleteall" aria-hidden="true">#</a></h3><p>▸ <strong>deleteAll</strong>(<code>options?</code>): <code>Promise</code>&lt;<code>number</code>&gt;</p><p>Delete all records with the same <code>keyPrefix</code> value</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>number</code>&gt;</p><p>deleted records count or 0</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L216" target="_blank" rel="noreferrer">Model.ts:216</a></p><hr><h3 id="runcommand" tabindex="-1">runCommand <a class="header-anchor" href="#runcommand" aria-hidden="true">#</a></h3><p>▸ <strong>runCommand</strong>(<code>commands</code>): <code>Promise</code>&lt;<code>any</code>&gt;</p><p>Redis command executer</p><p><strong><code>Example</code></strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">runCommand([&#39;hget&#39;, &#39;user:1234&#39;, &#39;name&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>commands</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">Redis command list.</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>any</code>&gt;</p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L231" target="_blank" rel="noreferrer">Model.ts:231</a></p><hr><h3 id="generaterediskey" tabindex="-1">generateRedisKey <a class="header-anchor" href="#generaterediskey" aria-hidden="true">#</a></h3><p>▸ <code>Private</code> <strong>generateRedisKey</strong>(<code>data</code>): <code>string</code></p><p>Generate full redis key. if model has a <code>keyUnique</code> use it from <code>data</code> else generate random unique</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">ModelInstance data</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>string</code></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L240" target="_blank" rel="noreferrer">Model.ts:240</a></p><hr><h3 id="createinstance" tabindex="-1">createInstance <a class="header-anchor" href="#createinstance" aria-hidden="true">#</a></h3><p>▸ <code>Private</code> <strong>createInstance</strong>(<code>data</code>, <code>dataInfo</code>): <a href="./ModelInstance.default.html"><code>default</code></a></p><p>Create ModelInstance from raw data</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">raw</td></tr><tr><td style="text-align:left;"><code>dataInfo</code></td><td style="text-align:left;"><a href="./../interfaces/Interfaces.DataInfo.html"><code>DataInfo</code></a></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-hidden="true">#</a></h4><p><a href="./ModelInstance.default.html"><code>default</code></a></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L252" target="_blank" rel="noreferrer">Model.ts:252</a></p>`,170),i=[l];function n(o,h,s,c,f,u){return a(),t("div",null,i)}const b=e(r,[["render",n]]);export{m as __pageData,b as default};
