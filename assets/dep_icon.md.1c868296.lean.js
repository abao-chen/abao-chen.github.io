import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";var p="/images/genIcon.png",o="/images/selectIconSet.png",e="/images/outDir.png";const v='{"title":"\u56FE\u6807","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u5E93\u56FE\u6807","slug":"\u7EC4\u4EF6\u5E93\u56FE\u6807"},{"level":2,"title":"Svg Sprite \u56FE\u6807","slug":"svg-sprite-\u56FE\u6807"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"Iconify \u56FE\u6807","slug":"iconify-\u56FE\u6807"},{"level":2,"title":"\u56FE\u6807\u9009\u62E9\u5668","slug":"\u56FE\u6807\u9009\u62E9\u5668"},{"level":3,"title":"\u56FE\u6807\u96C6\u9884\u751F\u6210","slug":"\u56FE\u6807\u96C6\u9884\u751F\u6210"},{"level":3,"title":"\u751F\u6210","slug":"\u751F\u6210"},{"level":3,"title":"\u4F18\u7F3A\u70B9","slug":"\u4F18\u7F3A\u70B9"}],"relativePath":"dep/icon.md","lastUpdated":1668752227049}',c={},l=t(`__VP_STATIC_START__<h1 id="\u56FE\u6807"><a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u6807</h1><p>\u9879\u76EE\u4E2D\u6709\u4EE5\u4E0B\u591A\u79CD\u56FE\u6807\u4F7F\u7528\u65B9\u5F0F\u3002</p><h2 id="\u7EC4\u4EF6\u5E93\u56FE\u6807"><a class="header-anchor" href="#\u7EC4\u4EF6\u5E93\u56FE\u6807" aria-hidden="true">#</a> \u7EC4\u4EF6\u5E93\u56FE\u6807</h2><p>\u4F7F\u7528 <code>ant-design-vue</code> \u63D0\u4F9B\u7684\u56FE\u6807</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StarOutlined</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StarFilled</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StarTwoTone</span> <span class="token attr-name">twoToneColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#eb2f96<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> StarOutlined<span class="token punctuation">,</span> StarFilled<span class="token punctuation">,</span> StarTwoTone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> StarOutlined<span class="token punctuation">,</span> StarFilled<span class="token punctuation">,</span> StarTwoTone <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="svg-sprite-\u56FE\u6807"><a class="header-anchor" href="#svg-sprite-\u56FE\u6807" aria-hidden="true">#</a> Svg Sprite \u56FE\u6807</h2><h3 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u5C06\u9700\u8981\u7684 svg \u56FE\u6807\u653E\u5230<code>src/assets/icons</code>\u5185</p><p>\u4F8B: test.svg</p><ol><li>\u4F7F\u7528<code>SvgIcon</code>\u7EC4\u4EF6\u8FDB\u884C\u5C55\u793A</li></ol><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvgIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> SvgIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Icon&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> SvgIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="2"><li>\u4F7F\u7528<code>Icon</code>\u7EC4\u4EF6\u8FDB\u884C\u5C55\u793A</li></ol><p>\u4EE5 <code>\uFF5Csvg</code> \u7ED3\u5C3E\u4F1A\u81EA\u52A8\u4F7F\u7528<code>SvgIcon</code>\u7EC4\u4EF6</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test|svg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Icon&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="iconify-\u56FE\u6807"><a class="header-anchor" href="#iconify-\u56FE\u6807" aria-hidden="true">#</a> Iconify \u56FE\u6807</h2><p>\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003 <a href="./../components/icon.html">Icon \u7EC4\u4EF6</a></p><p>\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684\u662F <a href="https://github.com/antfu/purge-icons/blob/main/packages/vite-plugin-purge-icons/README.md" target="_blank" rel="noopener noreferrer">vite-plugin-purge-icons</a> \u8FD9\u4E2A\u63D2\u4EF6\u6765\u8FDB\u884C\u56FE\u6807\u5B9E\u73B0\u3002</p><ol><li>\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-bash"><pre><code>
<span class="token function">yarn</span> <span class="token function">add</span> @iconify/iconify

<span class="token function">yarn</span> <span class="token function">add</span> @iconify/json @purge-icons/generated -D

</code></pre></div><ol start="2"><li>\u5728 <code>vite.config.ts</code>\u5185\u5F15\u5165\u63D2\u4EF6</li></ol><div class="language-ts"><pre><code><span class="token keyword">import</span> PurgeIcons <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-purge-icons&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">PurgeIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>\u7F16\u5199 Icon \u7EC4\u4EF6</li></ol><p>\u5B8C\u6574\u4EE3\u7801 <a href="https://github.com/vbenjs/vue-vben-admin/blob/main/src/components/Icon/src/Icon.vue" target="_blank" rel="noopener noreferrer">src/components/Icon/src/Icon.vue</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvgIcon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getSvgIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isSvgIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[$attrs.class]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:spin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spin<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
    <span class="token attr-name">v-else</span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>elRef<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[$attrs.class, <span class="token punctuation">&#39;</span>app-iconify anticon<span class="token punctuation">&#39;</span>, spin &amp;&amp; <span class="token punctuation">&#39;</span>app-iconify-spin<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getWrapStyle<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>
    defineComponent<span class="token punctuation">,</span>
    ref<span class="token punctuation">,</span>
    watch<span class="token punctuation">,</span>
    onMounted<span class="token punctuation">,</span>
    nextTick<span class="token punctuation">,</span>
    unref<span class="token punctuation">,</span>
    computed<span class="token punctuation">,</span>
    CSSProperties<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">&#39;./SvgIcon.vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Iconify <span class="token keyword">from</span> <span class="token string">&#39;@purge-icons/generated&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> isString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/utils/is&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> propTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/utils/propTypes&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token constant">SVG_END_WITH_FLAG</span> <span class="token operator">=</span> <span class="token string">&#39;|svg&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;GIcon&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> SvgIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// icon name</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> propTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
      <span class="token comment">// icon color</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> propTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
      <span class="token comment">// icon size</span>
      <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span> <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>string <span class="token operator">|</span> number<span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">spin</span><span class="token operator">:</span> propTypes<span class="token punctuation">.</span>bool<span class="token punctuation">.</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prefix</span><span class="token operator">:</span> propTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span><span class="token function">def</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>ElRef<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> isSvgIcon <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>icon<span class="token operator">?.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token constant">SVG_END_WITH_FLAG</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> getSvgIcon <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>icon<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token constant">SVG_END_WITH_FLAG</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> getIconRef <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>prefix <span class="token operator">?</span> props<span class="token punctuation">.</span>prefix <span class="token operator">+</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">unref</span><span class="token punctuation">(</span>isSvgIcon<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>elRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>getIconRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>icon<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> svg <span class="token operator">=</span> Iconify<span class="token punctuation">.</span><span class="token function">renderSVG</span><span class="token punctuation">(</span>icon<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>svg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
          el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>svg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> span <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          span<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;iconify&#39;</span><span class="token punctuation">;</span>
          span<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>icon <span class="token operator">=</span> icon<span class="token punctuation">;</span>
          el<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
          el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>span<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> getWrapStyle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">CSSProperties</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> size<span class="token punctuation">,</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
        <span class="token keyword">let</span> fs <span class="token operator">=</span> size<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          fs <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fs<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> color<span class="token punctuation">,</span>
          <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">&#39;inline-flex&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>icon<span class="token punctuation">,</span> update<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">onMounted</span><span class="token punctuation">(</span>update<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span> elRef<span class="token punctuation">,</span> getWrapStyle<span class="token punctuation">,</span> isSvgIcon<span class="token punctuation">,</span> getSvgIcon <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.app-iconify</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    // <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>

    <span class="token selector">&amp;-spin</span> <span class="token punctuation">{</span>
      <span class="token selector">svg</span> <span class="token punctuation">{</span>
        <span class="token property">animation</span><span class="token punctuation">:</span> loadingCircle 1s infinite linear<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">span.iconify</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">min-width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@iconify-bg-color</span><span class="token punctuation">;</span></span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u56FE\u6807\u9009\u62E9\u5668"><a class="header-anchor" href="#\u56FE\u6807\u9009\u62E9\u5668" aria-hidden="true">#</a> \u56FE\u6807\u9009\u62E9\u5668</h2><h3 id="\u56FE\u6807\u96C6\u9884\u751F\u6210"><a class="header-anchor" href="#\u56FE\u6807\u96C6\u9884\u751F\u6210" aria-hidden="true">#</a> \u56FE\u6807\u96C6\u9884\u751F\u6210</h3><p>\u7531\u4E8E\u56FE\u6807\u9009\u62E9\u5668\u8FD9\u4E2A\u6BD4\u8F83\u7279\u6B8A\u7684\u5B58\u5728\uFF0C\u9879\u76EE\u4F1A\u6253\u5305\u4E00\u4E9B\u6BD4\u8F83\u591A\u7684\u56FE\u6807\uFF0C\u56FE\u6807\u9009\u62E9\u5668\u7684\u56FE\u6807\u9700\u8981\u4E8B\u5148\u6307\u5B9A\u5E76\u751F\u6210\u76F8\u5E94\u7684\u6587\u4EF6\u3002</p><h3 id="\u751F\u6210"><a class="header-anchor" href="#\u751F\u6210" aria-hidden="true">#</a> \u751F\u6210</h3><ul><li>\u6267\u884C\u56FE\u6807\u751F\u6210\u547D\u4EE4</li></ul><div class="language-bash"><pre><code><span class="token function">yarn</span> gen:icon
</code></pre></div><ul><li>\u8FD9\u91CC\u4F1A\u8BA9\u4F60\u9009\u62E9\u672C\u5730\u8FD8\u662F\u5728\u7EBF\u751F\u6210\uFF0C\u4E24\u79CD\u65B9\u5F0F\u5404\u6709\u5229\u5F0A\u3002\u5982\u4E0B\u56FE\u6240\u793A</li></ul><p>local \u8868\u793A\u672C\u5730\uFF0Conline \u8868\u793A\u5728\u7EBF\uFF0C\u56DE\u8F66\u786E\u8BA4</p><p><img src="`+p+'" alt=""></p><ul><li>\u9009\u62E9\u4F60\u8981\u751F\u6210\u7684\u56FE\u6807\u96C6,\u56DE\u8F66\u786E\u8BA4</li></ul><p><img src="'+o+'" alt=""></p><ul><li>\u9009\u62E9\u56FE\u6807\u8F93\u51FA\u7684\u76EE\u5F55(\u9879\u76EE\u9ED8\u8BA4 src/components/Icon/data)\uFF0C\u53EF\u4EE5\u76F4\u63A5\u56DE\u8F66\u9009\u62E9\u9ED8\u8BA4</li></ul><p><img src="'+e+'" alt=""></p><p>\u5230\u8FD9\u91CC\u56FE\u6807\u96C6\u5DF2\u7ECF\u751F\u6210\u5B8C\u6210\u4E86\uFF0C\u6B64\u65F6\u4F60\u7684\u56FE\u6807\u9009\u62E9\u5668\u5DF2\u7ECF\u662F\u4F60\u6240\u9009\u7684\u7684\u56FE\u6807\u96C6\u7684\u56FE\u6807\u4E86\u3002</p><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F\u4E0D\u8981\u9891\u7E41\u66F4\u65B0</p><p>\u5982\u679C\u524D\u9762\u9009\u62E9\u7684\u662F\u672C\u5730\u751F\u6210\u7684\u8BDD\uFF0C\u9891\u7E41\u66F4\u6362\u56FE\u6807\u96C6\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u56FE\u6807\u4E22\u5931\u6216\u8005\u663E\u793A\u4E0D\u51FA\u6765</p></div><h3 id="\u4F18\u7F3A\u70B9"><a class="header-anchor" href="#\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4F18\u7F3A\u70B9</h3><ul><li><strong>\u5728\u7EBF\u56FE\u6807(\u9879\u76EE\u9ED8\u8BA4,\u63A8\u8350)</strong></li></ul><p>\u8BE5\u65B9\u5F0F\u4F1A\u5728\u56FE\u6807\u9009\u62E9\u5668\u4F7F\u7528\u5230\u56FE\u6807\u7684\u65F6\u5019\u8FDB\u884C\u5728\u7EBF\u8BF7\u6C42,\u7136\u540E\u7F13\u5B58\u5BF9\u5E94\u7684\u56FE\u6807\u5230\u6D4F\u89C8\u5668\u3002\u53EF\u4EE5\u6709\u6548\u51CF\u5C11\u4EE3\u7801\u6253\u5305\u4F53\u79EF\u3002</p><p>\u5982\u679C\u4F60\u7684\u9879\u76EE\u53EF\u4EE5\u8BBF\u95EE\u5916\u7F51\uFF0C\u5EFA\u8BAE\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F</p><p><strong>\u7F3A\u70B9\uFF1A</strong> \u5728\u5C40\u57DF\u7F51\u6216\u8005\u65E0\u6CD5\u8BBF\u95EE\u5230\u5916\u7F51\u7684\u73AF\u5883\u4E2D\u56FE\u6807\u663E\u793A\u4E0D\u51FA\u6765</p><ul><li><strong>\u672C\u5730\u56FE\u6807</strong></li></ul><p>\u8BE5\u65B9\u5F0F\u4F1A\u5728\u6253\u5305\u7684\u65F6\u5019\u5C06\u56FE\u6807\u9009\u62E9\u5668\u7684\u56FE\u6807\u5168\u90E8\u6253\u5305\u5230 js \u5185\u3002\u5728\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u4F1A\u989D\u5916\u7684\u8BF7\u6C42\u5728\u7EBF\u56FE\u6807</p><p><strong>\u7F3A\u70B9\uFF1A</strong> \u6253\u5305\u4F53\u79EF\u4F1A\u504F\u5927\uFF0C\u5177\u4F53\u7684\u4F53\u79EF\u589E\u52A0\u5F97\u770B\u524D\u9762\u9009\u62E9\u56FE\u6807\u96C6\u7684\u65F6\u5019\u9009\u62E9\u7684\u56FE\u6807\u6570\u91CF\u7684\u591A\u5C11\u51B3\u5B9A</p>__VP_STATIC_END__',47),u=[l];function i(k,r,g,d,y,f){return a(),s("div",null,u)}var h=n(c,[["render",i]]);export{v as __pageData,h as default};
