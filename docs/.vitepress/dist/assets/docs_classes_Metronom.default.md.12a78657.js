import{_ as e,c as t,o as r,a as o}from"./app.a96331c1.js";const m=JSON.parse('{"title":"Class: default","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"redisClientOptions","slug":"redisclientoptions","link":"#redisclientoptions","children":[]},{"level":3,"title":"log","slug":"log","link":"#log","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"define","slug":"define","link":"#define","children":[]}]}],"relativePath":"docs/classes/Metronom.default.md","lastUpdated":1675123433000}'),a={name:"docs/classes/Metronom.default.md"},d=o('<p><a href="./../README.html">metronom</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/Metronom.html">Metronom</a> / default</p><h1 id="class-default" tabindex="-1">Class: default <a class="header-anchor" href="#class-default" aria-hidden="true">#</a></h1><p><a href="./../modules/Metronom.html">Metronom</a>.default</p><p>Metronom model creator</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./Metronom.default.html#redisclientoptions">redisClientOptions</a></li><li><a href="./Metronom.default.html#log">log</a></li></ul><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Metronom.default.html#constructor">constructor</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Metronom.default.html#define">define</a></li></ul><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="redisclientoptions" tabindex="-1">redisClientOptions <a class="header-anchor" href="#redisclientoptions" aria-hidden="true">#</a></h3><p>• <code>Optional</code> <strong>redisClientOptions</strong>: <code>RedisClientOptions</code>&lt;<code>Record</code>&lt;<code>string</code>, <code>never</code>&gt;, <code>Record</code>&lt;<code>string</code>, <code>never</code>&gt;&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Metronom.ts#L16" target="_blank" rel="noreferrer">Metronom.ts:16</a></p><hr><h3 id="log" tabindex="-1">log <a class="header-anchor" href="#log" aria-hidden="true">#</a></h3><p>• <code>Optional</code> <strong>log</strong>: <code>boolean</code> | <a href="./../enums/Enums.LogLevels.html"><code>LogLevels</code></a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Metronom.ts#L18" target="_blank" rel="noreferrer">Metronom.ts:18</a></p><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new default</strong>(<code>options</code>)</p><p>Base Metronom object. You can create new metronom instance with diffirent options like redis url.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/Interfaces.MetronomOptions.html"><code>MetronomOptions</code></a></td><td style="text-align:left;">redis client settings</td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Metronom.ts#L27" target="_blank" rel="noreferrer">Metronom.ts:27</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="define" tabindex="-1">define <a class="header-anchor" href="#define" aria-hidden="true">#</a></h3><p>▸ <strong>define</strong>(<code>schema</code>, <code>keyPrefix?</code>, <code>modelOptions?</code>): <a href="./Model.default.html"><code>default</code></a></p><p>Create metronom model from this Metronom object</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>schema</code></td><td style="text-align:left;"><a href="./../interfaces/Interfaces.Schema.html"><code>Schema</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">Record&#39;s key-value schema</td></tr><tr><td style="text-align:left;"><code>keyPrefix</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;object&#39;</code></td><td style="text-align:left;">Record unique key&#39;s prefix. <code>&quot;users:1234&quot;</code> --&gt; &quot;<code>keyPrefix</code>:<code>keyUnique</code>&quot;</td></tr><tr><td style="text-align:left;"><code>modelOptions?</code></td><td style="text-align:left;"><a href="./../interfaces/Interfaces.ModelOptions.html"><code>ModelOptions</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./Model.default.html"><code>default</code></a></p><p>new record of Model</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Metronom.ts#L46" target="_blank" rel="noreferrer">Metronom.ts:46</a></p>',40),n=[d];function l(i,s,c,h,f,u){return r(),t("div",null,n)}const g=e(a,[["render",l]]);export{m as __pageData,g as default};
