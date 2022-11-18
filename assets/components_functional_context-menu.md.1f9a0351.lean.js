import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"ContextMenu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"createContextMenu","slug":"createcontextmenu"}],"relativePath":"components/functional/context-menu.md","lastUpdated":1668752227030}',p={},o=t(`__VP_STATIC_START__<h1 id="contextmenu"><a class="header-anchor" href="#contextmenu" aria-hidden="true">#</a> ContextMenu</h1><p>\u51FD\u6570\u5F0F\u521B\u5EFA\u53F3\u952E\u83DC\u5355\u7EC4\u4EF6\uFF0C \u53EA\u8981\u80FD\u62FF\u5230 dom \u7684 <code>event</code> \u5BF9\u8C61\u5C31\u80FD\u4E3A\u5176\u521B\u5EFA\u53F3\u952E\u83DC\u5355\u3002</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@contextmenu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleContext<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Right Click on me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useContextMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useContextMenu&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useMessage&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>createContextMenu<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> createMessage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">handleContext</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">event</span><span class="token operator">:</span> e<span class="token punctuation">,</span>
          <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;New&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;ant-design:plus-outlined&#39;</span><span class="token punctuation">,</span>
              <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                createMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;click new&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Open&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;ant-design:folder-open-filled&#39;</span><span class="token punctuation">,</span>
              <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                createMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;click open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> handleContext <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="createcontextmenu"><a class="header-anchor" href="#createcontextmenu" aria-hidden="true">#</a> createContextMenu</h2><p><strong>Options</strong></p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>event</td><td><code>Event</code></td><td>-</td><td>-</td><td>\u9700\u8981\u521B\u5EFA\u7684 dom \u7684 <code>Event</code> \u5BF9\u8C61</td></tr><tr><td>items</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>\u53F3\u952E\u83DC\u5355\u5217\u8868\uFF0C<code>ContextMenuItem</code>\u89C1\u4E0B\u65B9\u8BF4\u660E</td></tr></tbody></table><p><strong>ContextMenuItem</strong></p><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td><code>string</code></td><td>\u6587\u672C</td></tr><tr><td>icon</td><td><code>string</code></td><td>\u56FE\u6807,\u53C2\u8003\u56FE\u6807\u7EC4\u4EF6</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>handler</td><td><code>()=&gt;void</code></td><td>\u70B9\u51FB\u89E6\u53D1\u51FD\u6570</td></tr></tbody></table>__VP_STATIC_END__`,9),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
