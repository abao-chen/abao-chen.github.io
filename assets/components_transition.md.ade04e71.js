import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const v='{"title":"Transition","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"}],"relativePath":"components/transition.md","lastUpdated":1668752227045}',p={},o=t(`<h1 id="transition"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h1><p>\u7528\u4E8E\u9875\u9762/\u7EC4\u4EF6\u5207\u6362\u52A8\u753B</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>
        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9009\u62E9\u52A8\u753B<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ width: <span class="token punctuation">&#39;</span>150px<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> start <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`\${value}Transition\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>
    FadeTransition<span class="token punctuation">,</span>
    ScaleTransition<span class="token punctuation">,</span>
    SlideYTransition<span class="token punctuation">,</span>
    ScrollYTransition<span class="token punctuation">,</span>
    SlideYReverseTransition<span class="token punctuation">,</span>
    ScrollYReverseTransition<span class="token punctuation">,</span>
    SlideXTransition<span class="token punctuation">,</span>
    ScrollXTransition<span class="token punctuation">,</span>
    SlideXReverseTransition<span class="token punctuation">,</span>
    ScrollXReverseTransition<span class="token punctuation">,</span>
    ScaleRotateTransition<span class="token punctuation">,</span>
    ExpandXTransition<span class="token punctuation">,</span>
    ExpandTransition<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Transition/index&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> transitionList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Fade&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Scale&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;SlideY&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ScrollY&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;SlideYReverse&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ScrollYReverse&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;SlideX&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ScrollX&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;SlideXReverse&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ScrollXReverse&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ScaleRotate&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ExpandX&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Expand&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> transitionList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      Select<span class="token punctuation">,</span>
      FadeTransition<span class="token punctuation">,</span>
      ScaleTransition<span class="token punctuation">,</span>
      SlideYTransition<span class="token punctuation">,</span>
      ScrollYTransition<span class="token punctuation">,</span>
      SlideYReverseTransition<span class="token punctuation">,</span>
      ScrollYReverseTransition<span class="token punctuation">,</span>
      SlideXTransition<span class="token punctuation">,</span>
      ScrollXTransition<span class="token punctuation">,</span>
      SlideXReverseTransition<span class="token punctuation">,</span>
      ScrollXReverseTransition<span class="token punctuation">,</span>
      ScaleRotateTransition<span class="token punctuation">,</span>
      ExpandXTransition<span class="token punctuation">,</span>
      ExpandTransition<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Fade&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> options<span class="token punctuation">,</span> value<span class="token punctuation">,</span> start<span class="token punctuation">,</span> show <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),e=[o];function c(u,l,i,k,r,g){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{v as __pageData,m as default};
