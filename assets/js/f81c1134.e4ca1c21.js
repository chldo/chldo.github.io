"use strict";(self.webpackChunkchldo_github_io=self.webpackChunkchldo_github_io||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"2024-ax-seminar","metadata":{"permalink":"/blog/2024-ax-seminar","editUrl":"https://github.com/chldo/chldo.github.io/tree/main/blog/2024-08-30-axseminar/index.mdx","source":"@site/blog/2024-08-30-axseminar/index.mdx","title":"AX \uc2dc\ub300, \uacf5\uacf5 \ud601\uc2e0\uc744 \uc704\ud55c AI \ub3c4\uc785 \uc804\ub7b5 with AWS","description":"AX\uc2dc\ub300, \ucf54\uc5b4\ub2f7\ud22c\ub370\uc774\uac00 \uc900\ube44\ud55c \ud2b9\ubcc4\ud55c \uc138\uc158\uc5d0 \uc5ec\ub7ec\ubd84\uc744 \ucd08\ub300\ud569\ub2c8\ub2e4.","date":"2024-08-30T00:00:00.000Z","tags":[{"inline":true,"label":"ax","permalink":"/blog/tags/ax"},{"inline":true,"label":"aws","permalink":"/blog/tags/aws"},{"inline":true,"label":"ai","permalink":"/blog/tags/ai"},{"inline":true,"label":"agent","permalink":"/blog/tags/agent"},{"inline":true,"label":"core.today","permalink":"/blog/tags/core-today"}],"readingTime":4.245,"hasTruncateMarker":false,"authors":[{"name":"Kyunghoon Kim","title":"Maintainer of Chldo","url":"https://github.com/koorukuroo","imageURL":"https://github.com/koorukuroo.png","key":"kyunghoon"}],"frontMatter":{"slug":"2024-ax-seminar","title":"AX \uc2dc\ub300, \uacf5\uacf5 \ud601\uc2e0\uc744 \uc704\ud55c AI \ub3c4\uc785 \uc804\ub7b5 with AWS","authors":["kyunghoon"],"tags":["ax","aws","ai","agent","core.today"]},"unlisted":false,"nextItem":{"title":"Welcome to chldo","permalink":"/blog/welcome"}},"content":"### AX\uc2dc\ub300, \ucf54\uc5b4\ub2f7\ud22c\ub370\uc774\uac00 \uc900\ube44\ud55c \ud2b9\ubcc4\ud55c \uc138\uc158\uc5d0 \uc5ec\ub7ec\ubd84\uc744 \ucd08\ub300\ud569\ub2c8\ub2e4.\\n\\n\ucd5c\uadfc \uae09\uaca9\ud788 \ubc1c\uc804\ud558\ub294 \uc5d0\uc774\uc804\ud2b8 \uc778\uacf5\uc9c0\ub2a5(Agent AI) \uae30\uc220\uc740 \uc6b0\ub9ac\uc758 \uc0c1\uc0c1\uc744 \ucd08\uc6d4\ud558\ub294 \ud601\uc2e0\uc801\uc778 \uac00\ub2a5\uc131\uc744 \uc5f4\uc5b4\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788, Agent AI\ub294 \ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \uc2dc\uacc4\uc5f4 \ub4f1 \ub2e4\uc591\ud55c \ub370\uc774\ud130 \ubd84\uc57c\uc5d0\uc11c \uc778\uac04\uacfc \uc720\uc0ac\ud55c \ucc3d\uc870\ub825\uc744 \ubc1c\ud718\ud558\uba70 \ud070 \uc131\uacfc\ub97c \uac70\ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \uc138\ubbf8\ub098\uc5d0\uc11c\ub294 \uae30\uc5c5 \ubc0f \uacf5\uacf5\uae30\uad00\uc758 AWS \uae30\ubc18 Agent AI \ub3c4\uc785 \uacfc\uc815\uc5d0\uc11c \uc5bb\uc740 \uadc0\uc911\ud55c \uc778\uc0ac\uc774\ud2b8\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4.\\n\\n\ubcf8 \uc138\ubbf8\ub098\ub294 \uacf5\uacf5\uae30\uad00\uc5d0\uc11c\uc758 AI \ud2b8\ub79c\uc2a4\ud3ec\uba54\uc774\uc158(AX)\uc744 \uc911\uc2ec\uc73c\ub85c, \ube60\ub974\uac8c \ubc1c\uc804\ud558\ub294 Agent AI \uae30\uc220\ub4e4\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\ub294 \uc804\ub7b5\uc744 \ub2e4\ub8f9\ub2c8\ub2e4. \ub610\ud55c, Agent AI\uc758 \uc704\ud5d8\uacfc \uc81c\uc57d \uc0ac\ud56d\uc744 \ubd84\uc11d\ud558\uace0 \uc774\ub97c \uadf9\ubcf5\ud558\uae30 \uc704\ud55c \ubc29\uc548\uc744 \uc81c\uc2dc\ud569\ub2c8\ub2e4. \uc138\ubbf8\ub098\uc5d0 \ucc38\uc11d\ud558\uc5ec AWS \uae30\ubc18 Agent AI\uc758 \ubbf8\ub798\ub97c \uc120\ub3c4\ud560 \uae30\uc220\uc801 \ud601\uc2e0\uacfc \uc0ac\ud68c\uc801 \ub300\uc751 \ubc29\uc548\uc5d0 \ub300\ud574 \ub17c\uc758\ud558\uace0, \uc720\uc775\ud55c \ud1b5\ucc30\uc744 \uc5bb\uc744 \uae30\ud68c\ub97c \ub193\uce58\uc9c0 \ub9c8\uc138\uc694.\\n\\n-   \ud589\uc0ac\uc77c\uc2dc : 2024\ub144 08\uc6d4 30\uc77c (\uae08\uc694\uc77c) 14:00 - 17:00\\n-   \ud589\uc0ac\uc7a5\uc18c : UNIST(\uc6b8\uc0b0\uacfc\ud559\uae30\uc220\uc6d0) 110\ub3d9 \uc81c4\uacf5\ud559\uad00 U207\ud638-7\ud638 \ud574\ub3d9\ud640 A\\n\\n![axseminar](./202408_1.webp)\\n![axseminar](./202408_2.png)\\n\\n### \ud589\uc0ac \ub0b4\uc6a9\\n\\n#### \u25b6 \uc624\ud504\ub2dd\\n\\n\ub2e4\uac00\uc628 \ub125\uc2a4\ud2b8 \ub178\uba40\uc758 \uc2dc\ub300, \uc778\uac04\uacfc AI\uc758 \ud611\uc5c5\uc744 \uc5b4\ub5bb\uac8c \ud604\uc7a5\uc5d0 \ub3c4\uc785\ud560 \uac83\uc778\uac00? ( \ucf54\uc5b4\ub2f7\ud22c\ub370\uc774 \uae40\uacbd\ud6c8 )\\n\\n#### \u25b6 AI \ub3c4\uc785 \ubc29\ubc95\ub860\\n\\nChldo AI : \uc5d0\uc774\uc804\ud2b8 AI\uc758 AWS \uae30\ubc18 \ud074\ub77c\uc6b0\ub4dc AI \ub3c4\uc785 \ubc29\ubc95 ( \ucf54\uc5b4\ub2f7\ud22c\ub370\uc774 \uae40\uacbd\ud6c8 )\\nBreak\\n\\n#### \u25b6 AWS \uc804\ubb38\uac00\uc758 \ud074\ub77c\uc6b0\ub4dc \uae30\ubc18 \uc138\uc158\\n\\nGPU / HPC on AWS ( AWS )\\n\\n#### \u25b6 AI \ub3c4\uc785 \uc0ac\ub840 1\\n\\n\uc0ac\ud68c\uc801\uae30\uc5c5 \ucf54\ub07c\ub9ac\uacf5\uc7a5\uc758 AI \ud0a4\uc624\uc2a4\ud06c \ucf54\ub07c\ub9ac\uc544\uc800\uc528 \uc5d0\uc774\uc804\ud2b8 \ub3c4\uc785 ( \ucf54\ub07c\ub9ac\uacf5\uc7a5 \uc774\ucc44\uc9c4 \ub300\ud45c )\\nBreak\\n\\n#### \u25b6 AI \ub3c4\uc785 \uc0ac\ub840 2\\n\\n\ub300\ud559\uc218\ud559\uc5d0\uc11c\uc758 AI \ud29c\ud130 \ub3c4\uc785 ( UNIST \uae40\ud544\uc6d0 \uad50\uc218 \uc751\uc6a9\uc218\ud559 \uc18c\ubaa8\uc784 \ud300 )\\n\\n#### \u25b6 AI \ub3c4\uc785 \uc0ac\ub840 3\\n\\n\ub354\ud604\ub300 \ub300\uad6c : AI \uc870\ud5a5\uc0ac \ud558\uc774\uc13c\ud2b8\uc758 \ud5a5\uae30\ub85c\uc6b4 \uc5ec\uc815 ( \ucf54\uc5b4\ub2f7\ud22c\ub370\uc774 \uc548\uad6d\ubb38 \ud300\uc7a5 )\\n\uc138\ubbf8\ub098 \ucc38\uc5ec\uc790 \ubd84\ub4e4\uaed8\ub294 AI \ud5a5\uc218 Eau de AI\uc640 AWS \ubc18\ud314 \ud2f0\uc154\uce20\ub97c \uc99d\uc815\ud569\ub2c8\ub2e4. (\uc0ac\uc804 \ub4f1\ub85d \ubc0f \uc120\ucc29\uc21c \uc99d\uc815)\\n\\n### \ucc3e\uc544\uc624\uc2dc\ub294 \uae38\\n\\n![map](./seminar_place.webp)\\nKTX \uc6b8\uc0b0\uc5ed(\ud1b5\ub3c4\uc0ac)\uc5d0\uc11c 337\ubc88 \ubc84\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec UNIST\uc5d0\uc11c \ud558\ucc28\ud558\uac70\ub098 327, 807\ubc88 \ubc84\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \uc720\ub2c8\uc2a4\ud2b8 \uc785\uad6c\uc5d0\uc11c \ud558\ucc28\ud569\ub2c8\ub2e4.(\ud0dd\uc2dc \uc774\uc6a9 \uc2dc: \uc57d 5\ubd84)\\n\\n-   UNIST \uc624\ub294 \uae38 : https://unist-kor.unist.ac.kr/about-unist/directions/road/\\n-   \ub124\uc774\ubc84 \uc9c0\ub3c4 : https://naver.me/GxOLV12k\\n\\n##### \uc6b8\uc0b0\uacfc\ud559\uae30\uc220\uc6d0 110\ub3d9 \uc81c4\uacf5\ud559\uad00 U207\ud638-7\ud638 \ud574\ub3d9\ud640A\\n\\n110\ub3d9 2\uce35 \ucee4\ud53c\uc20d \uc624\ub978\ucabd \ub4a4\ud3b8\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uc8fc\ucc28 \uc2dc \ub3c4\ub85c \uacf5\uac04 \ubc0f 111\ub3d9 \ub4a4\ud3b8 \uc57c\uc678 \uc8fc\ucc28\uc7a5 \ub4f1\uc774 \ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. (\uc8fc\ucc28\uad8c \uc9c0\uc6d0)\\n\ubc14\uae65 \ucabd\uc5d0\uc11c \ucd9c\uc785\ud560 \uacbd\uc6b0\uc5d0\ub294 2\uce35\uc5d0\uc11c \uacf5\uac04\uc774 \ubc14\ub85c \uc5f0\uacb0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n## \uc0ac\uc804\ub4f1\ub85d \ub9c1\ud06c\\n\\n\uc544\ub798 \ub9c1\ud06c\ub97c \ud1b5\ud574 \uc0ac\uc804\ub4f1\ub85d\ud574 \uc8fc\uc2dc\ub294 \ubd84\uc5d0 \ud55c\ud574 AI \ud5a5\uc218\uc640 \ubc18\ud314 \ud2f0\uc154\uce20\ub97c \uc6b0\uc120\uc801\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4.\\n\\nhttps://forms.gle/Ej4ZLH9nV11fMVFA8"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/chldo/chldo.github.io/tree/main/blog/2024-01-01-welcome/index.md","source":"@site/blog/2024-01-01-welcome/index.md","title":"Welcome to chldo","description":"Find answer of your favorite.","date":"2024-01-01T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.105,"hasTruncateMarker":false,"authors":[{"name":"Kyunghoon Kim","title":"Maintainer of Chldo","url":"https://github.com/koorukuroo","imageURL":"https://github.com/koorukuroo.png","key":"kyunghoon"}],"frontMatter":{"slug":"welcome","title":"Welcome to chldo","authors":["kyunghoon"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"AX \uc2dc\ub300, \uacf5\uacf5 \ud601\uc2e0\uc744 \uc704\ud55c AI \ub3c4\uc785 \uc804\ub7b5 with AWS","permalink":"/blog/2024-ax-seminar"}},"content":"## Find answer of your favorite.\\n\\n### \ucd5c\uc560\uc758 \ub300\ub2f5\uc744 \ucc3e\uc544\ub4dc\ub9bd\ub2c8\ub2e4.\\n\\n![Docusaurus Plushie](./image.png)"}]}}')}}]);