
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    "~hds-core": "hds-core"
                }
            },
            module: {
                rules: [
                    {
                        test: /swagger-ui-react/,
                        use: loaders.null()
                    }
                ]
            }
        });
    } else {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    "~hds-core": "hds-core"
                }
            }
        });
    }
};
