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
#### Tidy data
> "All tidy datasets are alike, but every messy dataset is messy in its own way." - Hadley Wickham
All analysis scripts should assume tidy data as input.
This means that each
- column represents a variable
- row represents an observation
- cell only contains a single value

Data is rarely stored in tidy format, but that's why we have the preprocessing pipe for converting it.

#### Tidy tools

The tidy ideology does not limit to the data, but extends to the tools that utilize it. Tidy tools
- reuse existing data structures i.e. keeping the data tidy
- utilize piping simple functions, i.e. 
-- <code>data.function1().function2()</code> in Python, and
-- <code>magrittr</code> pipe operator <code>data %>% function1() %>% function2() %>%</code> built in the <code>tidyverse</code> libary of R
Piped functions should be 'jacks of one trade', i.e. only do one thing, do it well and avoid mixing side-effects and transformations. 
Tidy tools improve scalability of the code, but they also greatly improve the readability of the code, making it easier to read and perceive. Of course, this is only when the functions are properly named. Function names:
- should be verbs
- identidy function families with a common prefix
- be rather long and descriptive than short and uninformative. Don't worry, autoincrement will take care of typing for you!


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

