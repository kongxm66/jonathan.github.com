"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2954],{3905:(e,r,t)=>{t.d(r,{Zo:()=>F,kt:()=>d});var i=t(7294);function A(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){A(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,i,A=function(e,r){if(null==e)return{};var t,i,A={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(A[t]=e[t]);return A}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(A[t]=e[t])}return A}var l=i.createContext({}),u=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},F=function(e){var r=u(e.components);return i.createElement(l.Provider,{value:r},e.children)},s="mdxType",U={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},p=i.forwardRef((function(e,r){var t=e.components,A=e.mdxType,n=e.originalType,l=e.parentName,F=a(e,["components","mdxType","originalType","parentName"]),s=u(t),p=A,d=s["".concat(l,".").concat(p)]||s[p]||U[p]||n;return t?i.createElement(d,o(o({ref:r},F),{},{components:t})):i.createElement(d,o({ref:r},F))}));function d(e,r){var t=arguments,A=r&&r.mdxType;if("string"==typeof e||A){var n=t.length,o=new Array(n);o[0]=p;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[s]="string"==typeof e?e:A,o[1]=a;for(var u=2;u<n;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8933:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>U,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var i=t(7462),A=(t(7294),t(3905));const n={},o="DFS&BSF",a={unversionedId:"leetcode/dfs&bsf",id:"leetcode/dfs&bsf",title:"DFS&BSF",description:"144. Binary Tree Preorder Traversal",source:"@site/docs/leetcode/6.dfs&bsf.md",sourceDirName:"leetcode",slug:"/leetcode/dfs&bsf",permalink:"/docs/leetcode/dfs&bsf",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/leetcode/6.dfs&bsf.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Divide and Conquer & Recursion",permalink:"/docs/leetcode/divide and conquer"},next:{title:"matrix",permalink:"/docs/leetcode/matrix"}},l={},u=[{value:"144. Binary Tree Preorder Traversal",id:"144-binary-tree-preorder-traversal",level:2},{value:"102. Binary Tree Level Order Traversal",id:"102-binary-tree-level-order-traversal",level:2},{value:"200. Number of Islands",id:"200-number-of-islands",level:2},{value:"207. Course Schedule",id:"207-course-schedule",level:2},{value:"743. Network Delay Time",id:"743-network-delay-time",level:2}],F={toc:u},s="wrapper";function U(e){let{components:r,...n}=e;return(0,A.kt)(s,(0,i.Z)({},F,n,{components:r,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"dfsbsf"},"DFS&BSF"),(0,A.kt)("h2",{id:"144-binary-tree-preorder-traversal"},"144. Binary Tree Preorder Traversal"),(0,A.kt)("p",null,"Given the root of a binary tree, return the preorder traversal of its nodes' values."),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Example 1:"),(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("img",{alt:"Locale Dropdown",src:t(1779).Z,width:"202",height:"324"})),(0,A.kt)("li",{parentName:"ul"},"Input: root = ","[1,null,2,3]"," Output: ","[1,2,3]"))),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Example 2: Input: root = [] Output: []")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Example 3: Input: root = ","[1]"," Output: ","[1]"))),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="\u9012\u5f52"',title:'"\u9012\u5f52"'},"/**\n * \u9012\u5f52\n */\nclass Solution {\n    List<Integer> result = new ArrayList<>();\n    public List<Integer> preorderTraversal(TreeNode root) {\n        preorderRecursion(root);\n        return result;\n    }\n\n    private void preorderRecursion(TreeNode node) {\n        if(node == null) return; // \u9012\u5f52\u7ec8\u6b62\u6761\u4ef6\n        result.add(node.val); // \u4e2d\n        if(node.left != null) recursion(node.left);// \u5de6\n        if(node.right != null) recursion(node.right); // \u53f3\n    }\n}\n")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="\u904d\u53861"',title:'"\u904d\u53861"'},"/**\n * \u904d\u53861\n */\nclass Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        if(root == null) return result;\n        // \u8fd9\u91cc\u662f\u653e\u7684\u8282\u70b9\u5bf9\u8c61\uff0c\u4e0d\u662f\u503c\n        // \u653e\u503c\u600e\u4e48\u627e\u5de6\u53f3\u5b69\u5b50\uff1f\n        Deque<TreeNode> deque = new ArrayDeque<>();\n        deque.offerLast(root);\n        while(!deque.isEmpty()) {\n            TreeNode temp = deque.pollLast();\n            result.add(temp.val); //\u4e2d\u8282\u70b9\n            // \u8fd9\u91cc\u4e3a\u4ec0\u4e48\u8981\u5148\u653e\u53f3\u8282\u70b9\n            // \u56e0\u4e3a\u662f\u7528\u6808\u6a21\u62df\uff0c\u6240\u4ee5\u540e\u52a0\u5165\u7684\u5148\u51fa\u6808\n            // \u4e5f\u5c31\u662fleft\u8282\u70b9\u5148\u51fa\u6808\uff0c\u7b26\u5408preorder traversal\n            if(temp.right != null) deque.offerLast(temp.right);\n            if(temp.left != null) deque.offerLast(temp.left);\n        }\n        return result;\n    }\n}\n")),(0,A.kt)("h2",{id:"102-binary-tree-level-order-traversal"},"102. Binary Tree Level Order Traversal"),(0,A.kt)("p",null,"Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level)."),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Example 1:",(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("img",{alt:"Locale Dropdown",src:t(3513).Z,width:"277",height:"302"})),(0,A.kt)("li",{parentName:"ul"},"Input: root = ","[3,9,20,null,null,15,7]"," Output: [","[3]",",","[9,20]",",","[15,7]","]"))),(0,A.kt)("li",{parentName:"ul"},"Example 2: Input: root = ","[1]"," Output: [","[1]","]"),(0,A.kt)("li",{parentName:"ul"},"Example 3: Input: root = [] Output: []")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        if(root == null) return result;\n        // \u4e3a\u4ec0\u4e48\u8981\u7528\u961f\u5217\uff1f\n        // \u56e0\u4e3a\u961f\u5217\u6709\u5e8f\u51fa\u5165\uff0c\u5148\u8fdb\u5148\u51fa\n        // \u8bbf\u95ee\u5230\u8be5\u8282\u70b9\u540e\uff0c\u5904\u7406\u5b8c\u961f\u5217\u4e2d\u5f53\u524d\u5c42\u6570\u636e\n        // \u518d\u628a\u5f53\u524d\u5c42\u6bcf\u4e00\u4e2a\u8282\u70b9\u7684\u5de6\u53f3\u5b69\u5b50\u4e00\u6b21\u52a0\u5165\n        // \u4e0b\u6b21\u5faa\u73af\u4fbf\u662f\u6309\u6bcf\u4e00\u5c42\u6709\u5e8f\u7684\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.offer(root);\n        while(!queue.isEmpty()) {\n            // \u83b7\u53d6\u5f53\u524d\u5c42\u6240\u6709\u8282\u70b9\u6570\u91cf\n            int size = queue.size();\n            List<Integer> layer = new ArrayList<>(size);\n            // \u672c\u5c42\u8282\u70b9\u5168\u90e8\u51fa\u961f\n            for(int i = 0; i < size; i++) {\n                TreeNode node = queue.poll();\n                layer.add(node.val);\n                // \u51fa\u961f\u7684\u540c\u65f6\uff0c\u5c06\u5de6\u53f3\u5b69\u5b50\u52a0\u5165\u961f\u5217\uff0c\u5f62\u6210\u4e0b\u4e00\u5c42\u6570\u636e\n                if(node.left != null) queue.offer(node.left);\n                if(node.right != null) queue.offer(node.right);\n            }\n            result.add(layer);\n        }\n        return result;\n    }\n}\n")),(0,A.kt)("h2",{id:"200-number-of-islands"},"200. Number of Islands"),(0,A.kt)("p",null,"Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water."),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Example 1: "),(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Input: "),(0,A.kt)("pre",{parentName:"li"},(0,A.kt)("code",{parentName:"pre"},'grid = [\n        ["1","1","1","1","0"],\n        ["1","1","0","1","0"],\n        ["1","1","0","0","0"],\n        ["0","0","0","0","0"]\n    ]\n'))),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Output: 1")))),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Example 2: "),(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},"Input: ",(0,A.kt)("pre",{parentName:"li"},(0,A.kt)("code",{parentName:"pre"},'grid = [\n        ["1","1","0","0","0"],\n        ["1","1","0","0","0"],\n        ["0","0","1","0","0"],\n        ["0","0","0","1","1"]\n    ]\n'))))),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Output: 3"))),(0,A.kt)("p",null,"Best Answer: ",(0,A.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/number-of-islands/solutions/211211/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/"},"https://leetcode.cn/problems/number-of-islands/solutions/211211/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/")),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Locale Dropdown",src:t(2188).Z,width:"1280",height:"442"})),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int numIslands(char[][] grid) {\n        int count = 0;\n        for(int i = 0; i < grid.length; i++) {\n            for(int j = 0; j < grid[i].length; j++) {\n                // \u5982\u679c\u9047\u52301\uff0c\u6570\u91cf+1\n                // \u5982\u4f55\u5728\u904d\u5386\u7684\u65f6\u5019\uff0c\u4e0a\u4e0b\u5de6\u53f3\u7684\u9760\u8fd1\u5143\u7d20\u5982\u679c\u662f1\u7684\u65f6\u5019\u8df3\u8fc7\uff1f\n                // \u5c31\u662f\u5728\u904d\u5386\u5230\u5f53\u524d\u4f4d\u7f6e\u5982\u679c\u662f1\u7684\u65f6\u5019\n                // \u5c06\u4e0a\u4e0b\u5de6\u53f3\u6539\u6210\u5176\u4ed6\u503c\n                if(grid[i][j] == '1') {\n                    // dfs\u4f1a\u63d0\u524d\u628a\u4e0a\u4e0b\u5de6\u53f3\u662f1\u7684\u5168\u90e8\u6539\u62102\n                    // \u6240\u4ee5\u4e00\u6b21\u904d\u5386\uff0c\u4e4b\u524d\u662f1\u7684\u5df2\u7ecf\u53d8\u6210\u4e862\n                    // \u5c31\u4f1a\u8df3\u8fc7\uff0c\u53ea\u52a01\u6b21\n                    dfs(grid, i, j);\n                    count ++;\n                }\n            }\n        }\n        return count;\n    }\n\n    private void dfs(char[][] grid, int i, int j) {\n        // \u5224\u65adi\uff0cj\u662f\u5426\u8d8a\u754c\n        if(i < 0 || i >= grid.length) return;\n        if(j < 0 || j >= grid[0].length) return;\n        // \u4e0d\u662f\u9646\u5730\n        if(grid[i][j] == '0') return;\n        // \u5df2\u7ecf\u6807\u8bb0\u8fc7\n        if(grid[i][j] == '2') return;\n        // \u6807\u8bb0\n        grid[i][j] = '2';\n        // \u9012\u5f52\u5904\u7406\u4e0a\u53f3\u4e0b\u5de6\n        dfs(grid, i - 1, j);\n        dfs(grid, i, j + 1);\n        dfs(grid, i + 1, j);\n        dfs(grid, i, j - 1);\n    }\n}\n")),(0,A.kt)("h2",{id:"207-course-schedule"},"207. Course Schedule"),(0,A.kt)("p",null,"There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites","[i]"," = ","[a(i), b(i)]"," indicates that you must take course b(i) first if you want to take course a(i)."),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"For example, the pair ","[0, 1]",", indicates that to take course 0 you have to first take course 1.\nReturn true if you can finish all courses. Otherwise, return false."),(0,A.kt)("li",{parentName:"ul"},"Example 1:",(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},"Input: numCourses = 2, prerequisites = [","[1,0]","]"),(0,A.kt)("li",{parentName:"ul"},"Output: true"),(0,A.kt)("li",{parentName:"ul"},"Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible."))),(0,A.kt)("li",{parentName:"ul"},"Example 2:",(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},"Input: numCourses = 2, prerequisites = [","[1,0]",",","[0,1]","]"),(0,A.kt)("li",{parentName:"ul"},"Output: false"),(0,A.kt)("li",{parentName:"ul"},"Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 - you should also have finished course 1. So it is impossible.")))),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-java"},"    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // \u6784\u5efa\u90bb\u63a5\u8868? \u4e3a\u4ec0\u4e48\u8981\u6784\u5efa\u76f4\u63a5\u7528prerequisites\u4e0d\u884c\u5417\uff1f\n        List<Integer>[] adjacencyList = new ArrayList[numCourses];\n        for(int i = 0; i < numCourses; i++) {\n            adjacencyList[i] = new ArrayList<>();\n        }\n        // \u8bb0\u5f55\u8282\u70b9\u7684\u5165\u5ea6\n        int[] inDegrees = new int[numCourses];\n        // \u586b\u5145\u9886\u63a5\u8868\n        for(int i = 0; i < prerequisites.length; i++) {\n            int[] edge = prerequisites[i];\n            int from = edge[1]; // \u6839\u636e\u9898\u610f\uff0c\u540e\u9762\u4e00\u4e2a\u662f\u5148\u51b3\u8bfe\u7a0b\n            int to = edge[0];\n            adjacencyList[from].add(to);\n            // \u8bb0\u5f55\u8282\u70b9\u7684\u5165\u5ea6\n            inDegrees[to] ++;\n        }\n        // \u961f\u5217\n        Queue<Integer> queue = new LinkedList<>();\n        // \u5c06\u5165\u5ea6\u4e3a0\u7684\u8282\u70b9\u5165\u961f\u5217\n        for(int i = 0; i < inDegrees.length; i++) {\n            if(inDegrees[i] == 0) queue.offer(i);\n        }\n        int pollCount = 0;\n        // BFS\n        while(!queue.isEmpty()) {\n            // \u51fa\u961f\n            pollCount ++;\n            int prev = queue.poll();\n            // \u51fa\u961f\u6570\u91cf + 1 (\u5df2\u7ecf\u904d\u5386\u8fc7\u7684\u6570\u91cf)\n            // \u62ff\u5230\u8be5\u8282\u70b9\u7684\u9886\u63a5\u8868\n            List<Integer> aList = adjacencyList[prev];\n            for(int cur : aList) {\n                // \u9886\u63a5\u8868\u4e2d\u7684\u5165\u5ea6-1\n                inDegrees[cur] --;\n                // \u5224\u65ad\u9886\u63a5\u8868\u4e2d\u7684\u8282\u70b9\u7684\u5165\u5ea6,\u662f\u5426\u4e3a0\n                if(inDegrees[cur] == 0) queue.offer(cur);\n            }\n        }\n        // \u6839\u636e\u62d3\u6251\u6392\u5e8f(Topological Sort)\u7684\u89c4\u5219\n        // \u5982\u679c\u904d\u5386\u8282\u70b9\u7684\u6570\u91cf\u7b49\u4e8e\u961f\u5217\u51fa\u961f\u6570\u91cf\uff0c\u90a3\u5c31\u662f\u65e0\u73af\n        // \u62d3\u6251\u6392\u5e8f\u6b65\u9aa4\uff1a\n        // 1. \u627e\u5230\u5165\u5ea6\u4e3a0\u7684\u8282\u70b9\n        // 2. \u5220\u9664\u8be5\u8282\u70b9\uff0c\u52a0\u5165\u7ed3\u679c\u4e2d \n        // 3.\u5faa\u73af1\u548c2\u76f4\u5230\u6ca1\u6709\u6ee1\u8db3\u6761\u4ef61\u7684\u8282\u70b9\u3002\n        return pollCount == numCourses;\n    }\n")),(0,A.kt)("h2",{id:"743-network-delay-time"},"743. Network Delay Time"),(0,A.kt)("p",null,"TODO"))}U.isMDXComponent=!0},2188:(e,r,t)=>{t.d(r,{Z:()=>i});const i=t.p+"assets/images/90524195-630b-4563-89c4-6ed3c17ab75e-3214bbd7f83e928f7c047a8d0acf99a5.png"},3513:(e,r,t)=>{t.d(r,{Z:()=>i});const i="data:image/jpeg;base64,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"},1779:(e,r,t)=>{t.d(r,{Z:()=>i});const i="data:image/jpeg;base64,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"}}]);