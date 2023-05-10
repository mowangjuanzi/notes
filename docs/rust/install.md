# 环境搭建

因为要学习 Rust，所以这里我推荐使用[官网教程](https://www.rust-lang.org/zh-CN/tools/install)来安装最新版本。

## Windows

Windows 可以使用两种安装方式，一种是 WSL。一种是原生安装。

WSL 执行如下命令就可以安装了：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

如果是原生安装，则首先需要下载 [RUST_INIT.EXE](https://www.rust-lang.org/zh-CN/tools/install)。这里推荐 64
位版本。需要安装 Visual Studio，这里不需要单独下载，遵循安装过程中的提示即可。


::: tip
编译时如果出现：`linker link.exe not found`

执行如下命令即可解决：

```bash
rustup toolchain install stable-x86_64-pc-windows-gnu
rustup default stable-x86_64-pc-windows-gnu
```
:::
## IDE

这里推荐使用 VS Code。免费。好用。

另外还需要安装 [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) 扩展。
