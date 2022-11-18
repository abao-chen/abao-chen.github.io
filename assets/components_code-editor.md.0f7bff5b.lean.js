import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"CodeEditor","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/code-editor.md","lastUpdated":1668752227021}',p={},o=t(`__VP_STATIC_START__<h1 id="codeeditor"><a class="header-anchor" href="#codeeditor" aria-hidden="true">#</a> CodeEditor</h1><p>\u4EE3\u7801\u7F16\u8F91\u5668</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeEditor</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modeValue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> CodeEditor <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> modeValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> modeValue <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value(v-model:value)</td><td><code>any</code></td><td>-</td><td>-</td><td>\u7ED1\u5B9A\u503C</td></tr><tr><td>mode</td><td><code>string</code></td><td><code>application/json</code></td><td><code>&#39;application/json&#39;</code>,<code>&#39;htmlmixed&#39;</code>,<code>&#39;javascript&#39;</code></td><td>\u4EE3\u7801\u7C7B\u578B</td></tr><tr><td>readonly</td><td><code>boolean</code></td><td>-</td><td>-</td><td>\u662F\u5426\u53EA\u8BFB</td></tr></tbody></table>__VP_STATIC_END__`,6),e=[o];function c(l,u,d,i,r,k){return s(),a("div",null,e)}var _=n(p,[["render",c]]);export{g as __pageData,_ as default};
