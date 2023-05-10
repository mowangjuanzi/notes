# 基础

## Hello world

不管学习什么语言，第一步都是学习如何输出 `hello world`，Rust 也不例外。

首先将如下内容放入到 `hello.rs` 中。

```rust
fn main() {
    println!("Hello, world!");
}
```

跟 C 语言一样，这里也需要定义 `main` 为入口函数名。

`fn` 用来定义这是一个函数。`()` 中用于定义参数。函数的具体处理放在 `{}` 中。返回值放在 `) {` 位置中。

`println!` 表示调用的是 Rust 宏（macro）。如果是调用函数，则为 `println`。
