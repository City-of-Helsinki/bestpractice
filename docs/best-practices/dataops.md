# Practices for data-intensive projects

## Preferences on languages and technologies
Prefer open source software and widely used packages, that are actively developed and have a steady user base. where possible. Avoid lisenced or commercial services, environments and platforms, unless there is a good reason to do so. Note that there may be many cases where it is better to outsource an AI solution than code & train or even just train your own algorithm. 

## Package management

### Python
Use <code>venv</code> for package management. If this is not possible, for example in Azure Machine Learning that only supports <code>conda</code> environments, install all packages trough <code>pip</code> and export requirements using <code>pip freeze >> requirements.txt</code> for reproducibility in other environments.

### R
Use <code>packrat</code> for package management.

### Other

# Development
## Pipelines

### Preprocess
#### Source of data: API vs curated dataset
  Note that data should not included in version control, ecept for what demos or tests reruire. With personal information one must be extra careful with this. 
  All development on utilizing personal information must be done using anonymised data until the final evaluations.
#### Tidy
All analysis scripts should assume tidy data as input.
This means that each
- column represents a variable
- row represents an observation
- cell only contains a single value

Data is rarely stored in tidy format, so the preprocessing pipeline should convert it ready for analysis.

Read more on tidy: https://vita.had.co.nz/papers/tidy-data.html or https://cran.r-project.org/web/packages/tidyverse/vignettes/manifesto.html

#### Describe
properties of data
### Model
common methods & libraries > niche and diy solutions
### Evaluate


### Communicate
#### Documentation
#### Visualization

##### Guidelines on using colors in plots

#### Demonstrate

## Notebooks

### Nbdev

### Code formatting with notebooks
Use nb_black for code formatting when developing with notebooks
https://github.com/dnanhkhoa/nb_black

## Integration

