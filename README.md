![[Eagle]](assets/images/logo.png#gh-light-mode-only)
![[Eagle]](assets/images/logo-dark.png#gh-dark-mode-only)

Gestor de incidencias en poblaciones.

Basado en el [prototipo](https://marvelapp.com/prototype/1i7j8b5/screen/17749599)

## Prepare environment

### Install dependencies

```shell
pnpm install
```

## Work locally

### Run dev environment

```shell
pnpm run dev
```

## Docker

### Build dev env image

```shell
docker build -t eagle .
```

### Run dev env container

```shell
docker run --rm --name eagle -p 5173:5173 eagle
```
