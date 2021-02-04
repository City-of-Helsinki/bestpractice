# Practices for data-intensive projects

Use python venv

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
#### Demonstrate

## Notebooks

## Integration

