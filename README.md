# Manhunt

Hack The North Project 2019. We're making manhunt more interactive by allowing users to tag each other by taking a picture.

## Setup

Install gatsby and firebase cli
```
npm install -g gatsby-cli
npm install -g firebase-tools
```

Install dependencies from `package.lock`
```
yarn install
```

Install dependencies for `/functions`:
```
cd functions
yarn install
```

## Testing

###On Windows:

In the first cmd window:
```
firebase serve --except hosting
```

In the second cmd window:
```
gatsby develop
```



###For any non-windows operating system:
```
firebase serve --except hosting & gatsby develop
```
