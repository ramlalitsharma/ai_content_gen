export default [
  {
    name: 'Blog Title',
    desc: 'An AI tool that generates blog titles based on your blog information.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
    slug: 'generate-blog-title',
    aiPrompt: 'Give me 5 blog topic ideas in bullet points based on the provided niche and outline, and present the result in a rich text editor format.',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: 'Blog Content',
    desc: 'An AI tool that generates engaging blog content based on your provided topic and outline.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
    slug: 'blog-content-generation',
    aiPrompt: 'Generate blog content based on the topic and outline, and present the result in a rich text editor format.',
    form: [
      {
        label: 'Enter your blog topic',
        field: 'input',
        name: 'topic',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: 'Blog Topic Ideas',
    desc: 'Generate unique and creative blog topic ideas for your niche.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
    slug: 'blog-topic-idea',
    aiPrompt: 'Generate the top 5 blog topic ideas in bullet points based on the provided niche, with no additional descriptions. Present the output in a rich text editor format.',
    form: [
      {
        label: 'Enter your niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
    ],
  },
  {
    name: 'YouTube SEO Title',
    desc: 'Generate SEO-optimized, high-ranking YouTube titles based on your keywords and outline.',
    category: 'YouTube Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
    slug: 'youtube-seo-title',
    aiPrompt: 'Generate the best SEO-optimized, high-ranking title ideas in bullet points based on the provided keywords and outline. Present the results in HTML format.',
    form: [
      {
        label: 'Enter your YouTube video keywords',
        field: 'input',
        name: 'keywords',
        required: true,
      },
      {
        label: 'Enter YouTube description outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: 'YouTube Description',
    desc: 'Generate short, engaging YouTube descriptions with emojis, perfect for your video content.',
    category: 'YouTube Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
    slug: 'youtube-description',
    aiPrompt: 'Generate a YouTube description with emojis, limited to 4-5 lines, based on the topic and outline. Present the output in a rich text editor format.',
    form: [
      {
        label: 'Enter your video topic/title',
        field: 'input',
        name: 'topic',
        required: true,
      },
      {
        label: 'Enter YouTube description outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: 'Rewrite Article (Plagiarism-Free)',
    desc: 'Rewrite your article or blog post to make it plagiarism-free and bypass AI detectors.',
    category: 'Rewriting Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
    slug: 'rewrite-article',
    aiPrompt: 'Rewrite the provided article to make it plagiarism-free and present the result in a rich text editor format.',
    form: [
      {
        label: 'Provide your article/blog post to rewrite',
        field: 'textarea',
        name: 'article',
        required: true,
      },
    ],
  },
  {
    name: 'Text Improver',
    desc: 'Enhance your writing by fixing grammar mistakes, refining tone, and eliminating redundancies.',
    category: 'Writing Assistant',
    icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
    slug: 'text-improver',
    aiPrompt: 'Improve the provided text by fixing grammar mistakes, enhancing clarity, and making it professional. Present the output in a rich text editor format.',
    form: [
      {
        label: 'Enter text to improve',
        field: 'textarea',
        name: 'textToImprove',
        required: true,
      },
    ],
  },
  {
    name: 'Instagram Post Generator',
    desc: 'Generate creative Instagram posts based on provided keywords.',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
    slug: 'instagram-post-generator',
    aiPrompt: 'Generate 3 Instagram posts based on the provided keywords. Present the output in a rich text editor format.',
    form: [
      {
        label: 'Enter keywords for your post',
        field: 'input',
        name: 'keywords',
        required: true,
      },
    ],
  },
  {
    name: 'Tagline Generator',
    desc: 'Create catchy taglines for your brand or product effortlessly.',
    category: 'Marketing',
    icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
    slug: 'tagline-generator',
    aiPrompt: 'Generate 5-10 catchy taglines for the provided product or brand. Present the output in a rich text editor format.',
    form: [
      {
        label: 'Product/Brand Name',
        field: 'input',
        name: 'productName',
        required: true,
      },
      {
        label: 'What are you selling/marketing?',
        field: 'textarea',
        name: 'outline',
        required: true,
      },
    ],
  },
];
