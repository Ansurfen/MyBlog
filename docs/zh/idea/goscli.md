# Gos-cli

[Gos-cli](https://gitee.com/ansurfen/gos-cli) 脚手架生成工具的未来计划

## 查看包依赖树

```shell
gs info -t
```

此命令能够打印出 `packages.json` 中所有的依赖

## 查看指定包的详细信息

```shell
gs info cors
```

## 更新项目

```shell
gs tidy
```

## 指定版本下载

```shell
gs get -v version [arugment]
```

## 更新至最新版本

```shell
gs get -u [arugment]
```

## 删除日志缓存

```shell
gs log -d
```