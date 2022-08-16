# my-react-mono: 一个基于React17精简而来的仓库

## 开发

本仓库参考React monorepo的最佳实践。所有与实现相关源码的源码均存放在`packages/`目录下。

当运行下面命令时，源码及其类型会被编译到`dist`文件夹下。

```
yarn build
```

## 调试

为方便开发和调试，这里引入了一个小型的React项目。这个项目基于vite脚手架创建，存放在`example`文件夹下。我们可以在这个使用官方React的项目里，一点一点替换自己实现的功能。

npm提供‘链接“的功能帮助开发者更好的调试尚未发布的npm包。我们可以借助这个特性，在example项目中调试我们的react。

首先，在仓库的根目录执行：

```shell
yarn link
```

然后进入`example`项目目录，执行：

```shell
yarn link my-react-mono
```

这样就链接上了my-react-mono包。此后，在example项目内，任何需要引入react的地方，均可替换为my-react-mono中的实现. 启动example项目后，任何在`packages`下的改动，都会触发example项目的热更新。

例如下面的方式可以替换`React.createElement`函数。

```javascript
// old
import React from 'react';

// new
import React from 'my-react-mono/dist/react'
```

需要注意的是，我们自己的react实现存放在`dist/react`文件夹下。这是因为为了减轻工作量，我们直接发布了整个monorepo，而不是像官方的react仓库一样对react，react-dom，scheduler等项目单独发布npm包。