# my-react-mono: 一个基于React17精简而来的仓库

## 开发

本仓库参考React monorepo的最佳实践。所有与实现相关源码的源码均存放在`packages/`目录下。

当运行下面命令时，源码及其类型会被编译到`dist`文件夹下。

```
yarn build
```

## 调试

为方便开发和调试，这里引入了一个小型的React项目。这个项目基于vite脚手架创建，存放在`example`文件夹下。开发者可以在根目录执行：

```shell
yarn link
```

然后进入`example`目录，执行：

```shell
yarn link my-react-mono
```

此后，在example项目内，任何需要引入react的地方，均可替换为my-react-mono. 启动example项目后，任何在`packages`下的改动，都会出发example项目的热更新。

例如下面的方式可以替换`React.createElement`函数。需要注意的是，我们自己的react实现存放在`dist/react`文件夹下。这是因为为了方便，我们直接发布了整个monorepo，而不是想官方的react仓库一样，对react，react-dom，scheduler等项目单独发布npm包。

```javascript
// old
import React from 'react';

// new
import React from 'my-react-mono/dist/react'
```

