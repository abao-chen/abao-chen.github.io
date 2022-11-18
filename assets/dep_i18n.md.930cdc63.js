import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";var p="/images/i18n.png";const m='{"title":"\u56FD\u9645\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"I18n-ally \u63D2\u4EF6","slug":"i18n-ally-\u63D2\u4EF6"},{"level":2,"title":"\u914D\u7F6E\u9ED8\u8BA4\u8BED\u8A00","slug":"\u914D\u7F6E\u9ED8\u8BA4\u8BED\u8A00"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u8BED\u8A00\u6587\u4EF6","slug":"\u8BED\u8A00\u6587\u4EF6"},{"level":3,"title":"\u8BED\u8A00\u5BFC\u5165\u903B\u8F91\u8BF4\u660E","slug":"\u8BED\u8A00\u5BFC\u5165\u903B\u8F91\u8BF4\u660E"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u5207\u6362\u8BED\u8A00","slug":"\u5207\u6362\u8BED\u8A00"},{"level":2,"title":"\u65B0\u589E","slug":"\u65B0\u589E"},{"level":3,"title":"\u8BED\u8A00\u6587\u4EF6","slug":"\u8BED\u8A00\u6587\u4EF6-1"},{"level":3,"title":"\u65B0\u589E\u8BED\u8A00","slug":"\u65B0\u589E\u8BED\u8A00"},{"level":2,"title":"\u8FDC\u7A0B\u8BFB\u53D6\u8BED\u8A00\u6570\u636E","slug":"\u8FDC\u7A0B\u8BFB\u53D6\u8BED\u8A00\u6570\u636E"},{"level":3,"title":"setupI18n \u51FD\u6570","slug":"setupi18n-\u51FD\u6570"},{"level":3,"title":"changeLocale \u51FD\u6570","slug":"changelocale-\u51FD\u6570"}],"relativePath":"dep/i18n.md","lastUpdated":1668752227049}',e={},o=t('<h1 id="\u56FD\u9645\u5316"><a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a> \u56FD\u9645\u5316</h1><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684 vscode \u5F00\u53D1\u5DE5\u5177\uFF0C\u5219\u63A8\u8350\u5B89\u88C5 <a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noopener noreferrer">I18n-ally</a> \u8FD9\u4E2A\u63D2\u4EF6</p><h2 id="i18n-ally-\u63D2\u4EF6"><a class="header-anchor" href="#i18n-ally-\u63D2\u4EF6" aria-hidden="true">#</a> I18n-ally \u63D2\u4EF6</h2><p>\u5B89\u88C5\u4E86\u8BE5\u63D2\u4EF6\u540E\uFF0C\u4F60\u7684\u4EE3\u7801\u5185\u53EF\u4EE5\u5B9E\u65F6\u770B\u5230\u5BF9\u5E94\u7684\u8BED\u8A00\u5185\u5BB9</p><p><img src="'+p+`" alt=""></p><h2 id="\u914D\u7F6E\u9ED8\u8BA4\u8BED\u8A00"><a class="header-anchor" href="#\u914D\u7F6E\u9ED8\u8BA4\u8BED\u8A00" aria-hidden="true">#</a> \u914D\u7F6E\u9ED8\u8BA4\u8BED\u8A00</h2><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/localeSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/localeSetting.ts</a> \u5185\u53EF\u4EE5\u914D\u7F6E\u9ED8\u8BA4\u8BED\u8A00</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LOCALE</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> LocaleType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">ZH_CN</span><span class="token operator">:</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">EN_US</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> localeSetting<span class="token operator">:</span> LocaleSetting <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u8BED\u8A00\u9009\u62E9\u5668</span>
  showPicker<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F53\u524D\u8BED\u8A00</span>
  locale<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9ED8\u8BA4\u8BED\u8A00</span>
  fallback<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5141\u8BB8\u7684\u8BED\u8A00</span>
  availableLocales<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">EN_US</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u914D\u7F6E\u8BED\u8A00\u5217\u8868</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> localeList<span class="token operator">:</span> DropMenu<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;\u7B80\u4F53\u4E2D\u6587&#39;</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u914D\u7F6E"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/setupI18n.ts" target="_blank" rel="noopener noreferrer">src/locales/setupI18n.ts</a> \u5185\u5F15\u5165\u7684 i18n \u8FD9\u4E2A\u65E0\u9700\u4FEE\u6539</p><h3 id="\u8BED\u8A00\u6587\u4EF6"><a class="header-anchor" href="#\u8BED\u8A00\u6587\u4EF6" aria-hidden="true">#</a> \u8BED\u8A00\u6587\u4EF6</h3><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/lang" target="_blank" rel="noopener noreferrer">src/locales/lang/</a> \u53EF\u4EE5\u914D\u7F6E\u5177\u4F53\u7684\u8BED\u8A00</p><div class="language-bash"><pre><code><span class="token comment"># locales/lang/</span>

<span class="token comment"># \u4E2D\u6587\u8BED\u8A00</span>
zh_CN:
  component: \u7EC4\u4EF6\u76F8\u5173
  layout: \u5E03\u5C40\u76F8\u5173
  routes: \u8DEF\u7531\u83DC\u5355\u76F8\u5173
  sys: \u7CFB\u7EDF\u9875\u9762\u76F8\u5173

en: \u540C\u4E0A

</code></pre></div><h3 id="\u8BED\u8A00\u5BFC\u5165\u903B\u8F91\u8BF4\u660E"><a class="header-anchor" href="#\u8BED\u8A00\u5BFC\u5165\u903B\u8F91\u8BF4\u660E" aria-hidden="true">#</a> \u8BED\u8A00\u5BFC\u5165\u903B\u8F91\u8BF4\u660E</h3><ol><li>\u521D\u59CB\u5316</li></ol><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/setupI18n.ts" target="_blank" rel="noopener noreferrer">src/locales/setupI18n</a> \u5185\u7684\u6839\u8BED\u8A00\u6587\u4EF6\u53EF\u4EE5\u770B\u5230</p><div class="language-ts"><pre><code><span class="token keyword">const</span> defaultLocal <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./lang/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.ts</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u4F1A\u5BFC\u5165 <code>src/locales/lang/{lang}.ts</code> \u6587\u4EF6\u8BED\u8A00\u5305\uFF0C\u6B64\u6587\u4EF6\u4F1A\u5BFC\u5165\u5BF9\u5E94\u8BED\u8A00\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u3002</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> genMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../helper&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> antdLocale <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/locale/zh_CN&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> momentLocale <span class="token keyword">from</span> <span class="token string">&#39;moment/dist/locale/zh-cn&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">&#39;./zh_CN/**/*.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">genMessage</span><span class="token punctuation">(</span>modules<span class="token punctuation">,</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    antdLocale<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  momentLocale<span class="token punctuation">,</span>
  momentLocaleName<span class="token operator">:</span> <span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5E76\u5C06\u5176\u6309\u76F8\u5E94\u7684\u76EE\u5F55\u7ED3\u6784\u8F6C\u5316\u4E3A\u591A\u5C42\u7EA7\u7684</p><p>\u4F8B:</p><p><code>lang/zh_CN/components/modal.ts</code> \u7684\u6587\u4EF6\u5185\u5BB9\u4E3A</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;\u6807\u9898&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5219\u5728\u4F7F\u7528\u7684\u4F7F\u7528\u76F4\u63A5\u4F7F\u7528 <code>t(&#39;components.modal.title&#39;)</code> \u8FDB\u884C\u83B7\u53D6\u3002</p><p>\u8FD9\u6837\u505A\u7684\u597D\u5904\u5728\u4E8E\u66F4\u5BB9\u6613\u7BA1\u7406\u5927\u578B\u9879\u76EE\u7684\u591A\u8BED\u8A00\u3002\u5982\u679C\u4E0D\u9700\u8981\u5206\u6A21\u5757\u5212\u5206\uFF0C\u53EF\u4EE5\u76F4\u63A5\u81EA\u5DF1\u624B\u52A8\u5BFC\u5165\u5373\u53EF\u3002</p><h2 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5F15\u5165\u9879\u76EE\u81EA\u5E26\u7684 <code>useI18n</code> <strong>\u6CE8\u610F\u4E0D\u8981\u5F15\u5165 vue-i18n \u7684 useI18n</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;components.modal.title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5207\u6362\u8BED\u8A00"><a class="header-anchor" href="#\u5207\u6362\u8BED\u8A00" aria-hidden="true">#</a> \u5207\u6362\u8BED\u8A00</h2><p>\u5207\u6362\u8BED\u8A00\u9700\u8981\u4F7F\u7528 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/useLocale.ts" target="_blank" rel="noopener noreferrer">src/locales/useLocale.ts</a></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/locales/useLocale&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> changeLocale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">changeLocale</span><span class="token punctuation">(</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u65B0\u589E"><a class="header-anchor" href="#\u65B0\u589E" aria-hidden="true">#</a> \u65B0\u589E</h2><h3 id="\u8BED\u8A00\u6587\u4EF6-1"><a class="header-anchor" href="#\u8BED\u8A00\u6587\u4EF6-1" aria-hidden="true">#</a> \u8BED\u8A00\u6587\u4EF6</h3><p>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/lang" target="_blank" rel="noopener noreferrer">src/locales/lang/</a> \u589E\u52A0\u5BF9\u5E94\u8BED\u8A00\u7684\u6587\u4EF6\u5373\u53EF</p><h3 id="\u65B0\u589E\u8BED\u8A00"><a class="header-anchor" href="#\u65B0\u589E\u8BED\u8A00" aria-hidden="true">#</a> \u65B0\u589E\u8BED\u8A00</h3><p>\u76EE\u524D\u9879\u76EE\u81EA\u5E26\u7684\u8BED\u8A00\u53EA\u6709 <code>zh_CN</code> \u548C <code>en</code> \u4E24\u79CD</p><p>\u5982\u679C\u9700\u8981\u65B0\u589E\uFF0C\u6309\u4EE5\u4E0B\u64CD\u4F5C\u5373\u53EF</p><ol><li>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/lang" target="_blank" rel="noopener noreferrer">src/locales/lang/</a> \u4E0B\u65B0\u589E\u76F8\u5E94\u7684\u8BED\u8A00\u76EE\u5F55\u53CA\u8BED\u8A00\u6587\u4EF6\u5E76\u5F15\u5165 \u5F15\u5165 ant-design-vue \u548C moment \u5BF9\u5E94\u7684\u8BED\u8A00\u5305</li><li>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/types/config" target="_blank" rel="noopener noreferrer">types/config.d.ts</a> \u5185\u52A0\u4E0A\u9884\u89C8\u7C7B\u578B\u5B9A\u4E49</li><li>\u5728 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/localeSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/localeSetting.ts</a> \u4FEE\u6539\u8BED\u8A00\u914D\u7F6E</li></ol><h2 id="\u8FDC\u7A0B\u8BFB\u53D6\u8BED\u8A00\u6570\u636E"><a class="header-anchor" href="#\u8FDC\u7A0B\u8BFB\u53D6\u8BED\u8A00\u6570\u636E" aria-hidden="true">#</a> \u8FDC\u7A0B\u8BFB\u53D6\u8BED\u8A00\u6570\u636E</h2><p>\u76EE\u524D\u9879\u76EE\u4F1A\u5728 <code>src/main.ts</code> \u5185\u7B49\u5F85 <code>setupI18n</code> \u8FD9\u4E2A\u51FD\u6570\u6267\u884C\u5B8C\u4E4B\u540E\u624D\u4F1A\u6E32\u67D3\u754C\u9762\uFF0C\u6240\u4EE5\u53EA\u9700\u5728 setupI18n \u5185\u53D1\u9001 ajax \u8BF7\u6C42\uFF0C\u5C06\u5BF9\u5E94\u7684\u6570\u636E\u8BBE\u7F6E\u5230 i18n \u5B9E\u4F8B\u4E0A\u5373\u53EF</p><div class="language-ts"><pre><code><span class="token comment">// src/main.ts</span>
<span class="token keyword">await</span> <span class="token function">setupI18n</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="setupi18n-\u51FD\u6570"><a class="header-anchor" href="#setupi18n-\u51FD\u6570" aria-hidden="true">#</a> setupI18n \u51FD\u6570</h3><p>\u4EE3\u7801: <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/setupI18n.ts" target="_blank" rel="noopener noreferrer">src/locales/setupI18n/</a></p><p>\u5982\u4E0B\u6240\u793A\uFF0C\u8FD9\u91CC\u4F1A\u5148\u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u8BED\u8A00\uFF0C\u9ED8\u8BA4\u8BED\u8A00\u53EF\u4EE5\u8BBE\u7F6E\u5728\u672C\u5730\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u7B49\u5F85\u63A5\u53E3\u8FD4\u56DE\u9ED8\u8BA4\u8BED\u8A00</p><div class="language-ts"><pre><code><span class="token comment">// setup i18n instance with glob</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">setupI18n</span><span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createI18nOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token keyword">as</span> I18n<span class="token punctuation">;</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createI18nOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>I18nOptions<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> locale <span class="token operator">=</span> localeStore<span class="token punctuation">.</span>getLocale<span class="token punctuation">;</span>

  <span class="token comment">// \u8FD9\u91CC\u6539\u6210\u63A5\u53E3\u83B7\u53D6</span>
  <span class="token keyword">const</span> defaultLocal <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./lang/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.ts</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> defaultLocal<span class="token punctuation">.</span>default<span class="token operator">?.</span>message <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    legacy<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    locale<span class="token punctuation">,</span>
    fallbackLocale<span class="token operator">:</span> fallback<span class="token punctuation">,</span>
    messages<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>locale<span class="token punctuation">]</span><span class="token operator">:</span> message<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    availableLocales<span class="token operator">:</span> availableLocales<span class="token punctuation">,</span>
    sync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    silentTranslationWarn<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    missingWarn<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    silentFallbackWarn<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="changelocale-\u51FD\u6570"><a class="header-anchor" href="#changelocale-\u51FD\u6570" aria-hidden="true">#</a> changeLocale \u51FD\u6570</h3><p>\u4EE3\u7801: <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/useLocale" target="_blank" rel="noopener noreferrer">src/locales/useLocale/</a></p><p>\u5F53\u624B\u52A8\u5207\u6362\u8BED\u8A00\u7684\u65F6\u5019\u4F1A\u89E6\u53D1 <code>useLocale</code> \u51FD\u6570\uFF0CuseLocale \u4E5F\u662F\u5F02\u6B65\u51FD\u6570\uFF0C\u53EA\u9700\u7B49\u5F85\u63A5\u53E3\u8FD4\u56DE\u54CD\u5E94\u7684\u6570\u636E\u540E\uFF0C\u518D\u8FDB\u884C\u8BBE\u7F6E\u5373\u53EF</p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">changeLocale</span><span class="token punctuation">(</span>locale<span class="token operator">:</span> LocaleType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> globalI18n <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">;</span>
  <span class="token keyword">const</span> currentLocale <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>globalI18n<span class="token punctuation">.</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentLocale <span class="token operator">===</span> locale<span class="token punctuation">)</span> <span class="token keyword">return</span> locale<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>loadLocalePool<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setI18nLanguage</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> locale<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8FD9\u91CC\u6539\u6210\u63A5\u53E3\u83B7\u53D6</span>
  <span class="token keyword">const</span> langModule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./lang/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.ts</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default <span class="token keyword">as</span> LangModule<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>langModule<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> momentLocale<span class="token punctuation">,</span> momentLocaleName <span class="token punctuation">}</span> <span class="token operator">=</span> langModule<span class="token punctuation">;</span>

  globalI18n<span class="token punctuation">.</span><span class="token function">setLocaleMessage</span><span class="token punctuation">(</span>locale<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  moment<span class="token punctuation">.</span><span class="token function">updateLocale</span><span class="token punctuation">(</span>momentLocaleName<span class="token punctuation">,</span> momentLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
  loadLocalePool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setI18nLanguage</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> locale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,49),c=[o];function l(u,i,r,k,d,g){return a(),s("div",null,c)}var f=n(e,[["render",l]]);export{m as __pageData,f as default};