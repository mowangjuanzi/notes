# 基础概念

## `Hello world`

首先编写一个基础的 C 语言程序：

```c
#include <stdio.h>

int main(void)
{
    printf("Hello world\n");
    return 0;
}
```

第 1 行 `#include <stdio.h>` 表示加载标准库 `stdio.h`。

第 3 行 `int main(void)` 定义了函数。
函数名是 `main`，该函数是程序的入口函数。
`int` 表示函数的返回值，必须是 `int` 类型。
`(void)` 是函数的输入值。`void` 表示不需要任何参数。

第 5 行是调用的函数 `printf` 是从第一行的 `stdio.h` 中引入的。该表示表示打印值。

第 6 行 `return` 表示函数返回。这里返回的是 `0`。表示运行正常。

一个最简单的 C 函数就是如此。

## 编译运行

