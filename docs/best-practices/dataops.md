# Practices for data-intensive projects

## Main principles

When working with data, we want to:
1. work with the best tools available that use proven, on-the-edge solutions
2. be true to the data
3. be open, reproducible and assessable
4. avoid locking ourselves out of the data or the tools we are using

Prefer open source software and widely used tools, packages and libraries, that are actively developed and have a steady user base. Avoid lisenced or commercial services, environments and platforms, and black-box solutions unless there is a good reason to do so. You should attempt to know and understand how, and why the data solution you are using is working the way it is. However, there may be many cases where it is better to outsource a solution than code & train own algorithm or gather a dataset by yourselves. The main tools for data projects are Python and R. However, we encourage selecting the tool that best fits the problem. If unsure, you may always consult Kanslia data team for support.

# Reproducible data projects
## Virtual environments
### Python
Prefer <code>venv</code> for package management. 
Some services may have restricted selection of environments. For example Azure Machine Learning only supports <code>conda</code>. In this case, install all packages trough <code>pip</code> and export requirements also using <code>pip freeze >> requirements.txt</code> for reproducibility in other environments.

### R
For R, the recommended enviroment management tool is <code>renv</code>. It is a robust replacement of the previous standard tool <code>packrat</code> with enhanced user experience and support for projects integrating R and Python tools. For more infromation, see this [RStudio blog post](https://blog.rstudio.com/2019/11/06/renv-project-environments-for-r/).

### Other
If working with other tools such as <code>Julia</code> or <code>Scala</code>, figure out best practices for environment control.

## Workflow management tools

In data projects it is common to end up having complex workflows with many inter-dependent input sources and output files and many time-consuming steps that one would like to avoid recreating unnecessarily over and over again in the development process, and when in production. This is where workflow management tools are convenient. There are two preferred tools for workflow management, GNU make and Snakemake.

### GNU make
<code>GNU make</code> or commonly just <code>make</code> is the long time standard tool for managing dependencies of multi-file scripts, generative and imperative code. Many developers are familiar with it, and it is also convenient for data projects. For more information, see [GNU documentation](https://www.gnu.org/software/make/)

### Snakemake

Snakemake is our recommended tool for complex workflow management. Snakemake is a scientific workflow management tool, originally developed for bioinformatics. It operates on the same principles as GNU make, but in addition for enhanced reproducibility, it provides improved scalability with built-in support for parallelization and environment control. The syntax is Pythonic and better human readable. See [Snakemake documentation](https://snakemake.readthedocs.io/en/stable/index.html) for more information.

A good explanation of the differences between the two can be found for example in this [reddit discussion](https://www.reddit.com/r/bioinformatics/comments/f7jsuz/difference_between_gnu_make_and_snakemake/).


## Workflow

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

Read more on tidy: [Wickham 2014](https://vita.had.co.nz/papers/tidy-data.html) and [The tidy tools manifesto](https://cran.r-project.org/web/packages/tidyverse/vignettes/manifesto.html)

#### Describe
properties of data
### Model
common methods & libraries > niche and diy solutions
### Evaluate


### Communicate
#### Visualization

##### Guidelines on using colors in plots

#### Documentation

#### Demonstrate

## Notebooks

### Nbdev

### Code formatting with notebooks
Use <code/>nb_black</code> for code formatting when developing with notebooks
https://github.com/dnanhkhoa/nb_black

## Integration

