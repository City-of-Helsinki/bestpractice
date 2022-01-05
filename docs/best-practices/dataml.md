## Best Practices

We included the following guiding principles to help you excel in your ML project.

Remember, none of these are strict and you are free to deviate for achieving the best results for you.
Also, it is better to get started with the work than to perfect it from the beginning.
You may return to these concepts when you want to improve your project or get stuck, iteratively!

ML requires team effort. When working with data, we have three kinds of people.
We have people who know code, people who know data, and people who know a problem to solve.
Those who know two of these are rare, not to mention owning all three.
Working with the template enables joint work of application field specialists 
(e.g. healthcare, city planning, finance), researchers, data analysts, engineers & scientists, programmers and other stakeholders.
In essence, the template is a tool for teamwork - *a single person does not have to, and most likely does not even know how to complete all of the steps defined!*.
With code, documentation and results as one, each team member can understand what is going on, and contribute on their behalf.


For general coding best practices in city of Helsinki projects, refer to [dev.hel.fi](https://dev.hel.fi/) where applicable.

---
** INFO BOX: Git Repository ** 
\*A git repository is a folder that contains source code and documentation for a software project.
Git is a software for version control and collaborative coding work. 
Git is commonly used from from command prompt (Windows), shell (Linux / Ubuntu) or terminal (MacOS).
It keeps track of all changes you make to your software in a `.gitfile`,
so that you can try out different things without making messy manual back ups.
To learn more about Git, their [homepage](https://git-scm.com/) is a great place to start.
Git is often used with GitHub, a free online service for storing and sharing repositories.
GitHub allows collaborative work, automated testing, hosting project doc pages and other fancy features.
Read more on GitHub on their [homepage](https://github.com/City-of-Helsinki/ml_project_template).

---

### 1. Prefer Standard Tools

It is recommended to use widely used standard tools with stable community support over niche optimal solutions, if possible.
This helps in ensuring that the methods used are reviewed, stable, accurate and maintained.
This is not a hard rule, but in general a viable stable solution is far better than one that is optimized but trivial.

This template installs the following Python standard tools for data science:

    NumPy          # matrix computation, linear algebra, vectorized operations
    Pandas         # complex data structures, useful functions for handling and plotting data, based on numpy
    Matplotlib     # create visualizations
    SciPy          # math and statistics
    Scikit-learn   # data mining, preprocessing, machine learning models
    ipython        # jupyter notebooks
    nbdev          # efficient software development with notebooks, code, docs and results as one 
    papermill      # parameterize notebooks
    Snakemake      # create reproducible workflows
    
These come with many dependencies, see `requirements.txt` for complete documentation.

Here are a few examples of preferred standard tools not included in this template that might help you get started when the template default tools lack features:

    statsmodels         # statistical models and tests (based on scipy)
    Keras / TensorFlow  # Neural networks (PyTorch is another alternative)
    Seaborn             # enhanced visualizations (based on matplotlib)
    Scrapy              # scrape data from online sources that do not have their own API
    BeautifulSoup       # parse data from web pages (simpler than Scrapy)
    NLTK                # natural language processing tools
    NetworkX            # network analysis algorithms
    DEAP                # genetic algorithms

The list is not, and never will be complete. You are free to use the tools that best suite you.
However, regardless of what your problem is, there are likely many different implementations for solving it.
Try to select a tool that is well documented and has steady userbase, frequent updates and many contributors.

### 2. Exploratory Programming - Use Jupyter Notebooks

We want to keep our code, documentation and results together, seamlessly.
We also want to see what's going on as we create the software, immediately.
Create code where we first need it, without the need of copy-pasting it around.
That's why we use jypyter notebooks as the core of our development.

Actually, even this page was generated from a notebook!

The notebooks are enhanced with `nbdev` tool to export code to modules, create doc pages, run tests, handle notebook version control etc.
Read more on nbdev on their [project pages](https://nbdev.fast.ai/).

---
**INFO BOX: How nbdev exports code from notebooks?**

![Exporting code from notebooks with nbdev](./visuals/nbdev_build_lib.png)

---

Some reasoning for those who are not yet convinced:

- In data projects, the code efficiency is irrelevant. The thinking time is what matters.
- It is simply impractical to create poorly documented notebook. With notebook development, your code is always well documented.
- How many of you actually test your ML code? Clean, running notebooks are the tests, and with `nbdev` unit tests are easy to include. 
- Most data science projects involve multiple stakeholders with various backgrounds and skillsets.
Many of them do not understand code, and even those who do, can not if it is poorly documented, nor can they interpret the results alone.
Notebook development can be used to improve explainability.
- If you are building an armada of spaceships, tiny IoT devices or otherwise feel that this template does not fulfill your requirements for production pipeline,
you can still use this for planning and creating documentation. Clean code is easier to achieve following a well documented demo!

With notebook development you get the right results much faster, and everyone involved can actually understand what is happening.

Read more on exploratory programming with notebooks from [this blog post](https://www.fast.ai/2019/12/02/nbdev/).

### 3. Tidy Data & Tools

> "All tidy datasets are alike, but every messy dataset is messy in its own way." - Hadley Wickham

Tidy principles are guidelines for clean and efficiend data utilization.
They can be appied to different programming languages.
Common packages, like `numpy`, `pandas` and `sklearn` have been developed so that these concepts are easy to apply.
Tidy data is easy to handle and understand. Tidy tools makes handling data, programming and creating explainable ML much easier.

**Data is tidy, when:**

1. **Every column is a variable** (either a feature or a label)
2. **Every row is an observation** (a data point).
3. **Every cell contains a single numerical value** (int, float, bool, str*)

*strings should usually be converted to numerical format before applying ML

Read more on tidy data from [tidy data manifesto](https://vita.had.co.nz/papers/tidy-data.html).


**Tidy Tools:**

1. **Reuse existing data structures**

Favour the default data types of the tools used over custom data types.
Avoid unnecessary conversions: once you have converted your data to tidy format, keep it tidy.

2. **Compose simple functions with the pipe**

A pipe operator takes the expression before it and gives it as the first argument to the expression after it,
assuming the expression on the right is a function call. In addition, pipe functions should do one thing, and do it well.
They either perform a transformation or a side-effect, but never both.

In a transformation a modified copy of the input is returned.
In a side effect a reference to the directly modified input is returned.

This allows composition of simple functions. In addition, you can easily determine what a pipeable function does just from its name.
In pseudocode, it looks something like this

```
model() >> init(X_train, y_train) >> fit(hyperparam) >> predict(X_test) >> mean()
```

instead of multiple or nested lines of code

```
m = model()
m>init(X_train, y_train)
m>fit(hyperparam)
mean_values = mean(m>predict(X_test))
```
although you can use pipeable functions in either way, or as a composition.

Piped code is easy to read: you see that a model class is initialized, fitted with certain hyperparameters, a prediction is made and aggregated to a mean.
Python does not have a native pipe operator such as `%>%` in R tidyverse,
but Python class functions can be written in a pipe-like way.
More on this in the `model` notebook.

As an excercise, you can take a look at function definitions of your favourite `sklearn` model.
Which of the functions perform transformations and which side-effects?
Can you find a function that does both?

3. **Embrace functional programming**

Python is not a functional programming language, but it can be written in functional style.
Many of the concepts can be used to write cleaner data code with Python. 
The key concepts of functional programming include pure functions, immutability and higher order functions.

* Pure Functions do not have side effects, meaning that they do not change the state of the program. Output of a pure function depends only on it's input.
* Immutability means that data cannot be changed after creation. Changes can only be made to a copy of the data.
* Higher order functions are functions that may accept other functions as parameters or return new functions. This allows high level of abstractation.

Read more on functional programming with Python from [this Stack Abuse article](https://stackabuse.com/functional-programming-in-python).

4. **Are designed for humans**

Create your code in a way that it's easy to use, read and debug.
In addition to clean structure and documentation, consider the naming of your classes, functions and variables.
Clean code is easy to understand, and actually eases your work with the documentation. 
Function name should describe what it does.
A lengthy informative names is better than short, uninformative ones.
Having a common prefix with similar functions and autocomplete makes make even lengthy names descriptions easy to use. 

Read more on tidy tools from [tidy tools manifesto](https://cran.r-project.org/web/packages/tidyverse/vignettes/manifesto.html).

### 4. Visualize Everything - Information is Aesthetic

The human eye is incredible tool for pattern recognition,
and thus visualization is probably the most powerful tool of data science.

A good rule of thumb is to visualize everything you can. 
How does your training data look like, how is your data after dimension reduction, how does the loss function evolve when you add data?
Great visualization will help you in model selection, detecting outliers, comparing values, evaluating your model and most importantly, explaining the results.

However, it is only helpful if you visualize the right aspects with the right tools, and stay true to the data.
There are many ways one can lie with data, intentionally or by accident.
The internet is full of examples of poor visualizations, see for example [this Towards Data Science article](https://towardsdatascience.com/why-is-this-chart-bad-5f16da298afa).

Many organizations have brand-synchronized visual guidelines, which unfortunately fit poorly for representing information.
In addition people making the plots just don't know how to make them great, so they just aim for what appears visually pleasing.
However, this quasi-aesthetic approach may lead to incorrect intepretation of the data.
The risk increases with easy to use advanced tools, such as `seaborn`,
that allows one to easily make fine-art like graphs.

You are still encouraged to use the fancy tools and make stunning plots - just consider how you can stay true to the data.

[Tufte's Principles of Graphical Exellence](https://sphweb.bumc.bu.edu/otlt/MPH-Modules/BS/DataPresentation/DataPresentation3.html)
give great instructions on how data should be visualized in an informative manner:

* Show the data
* Induce the viewer to think about the substance of the findings rather that the methodology, the graphical design, or other aspects
* Avoid distorting what the data have to say
* Present many numbers in a small space, i.e., efficiently
* Make large data sets coherent
* Encourage the eye to compare different pieces of data
* Reveal the data at several levels of detail, from a broad overview to the fine structure
* Serve a clear purpose:  description, exploration, tabulation, or decoration
* Be closely integrated with the statistical and verbal descriptions of the data set

(From E. R. Tufte. The Visual Display of Quantitative Information, 2nd Edition.  Graphics Press, Cheshire, Connecticut, 2001.)


Great visualizations is a massive topic and we can not possibly fit everything in this template. Here are a few links for further reading:

1. [Ten Simple Rules for Better Figures](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003833)
2. [Colorbrewer, tool for planning colour palettes in graphs](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3)
3. Misleading graph mistakes to avoid from [Wikipedia](https://en.wikipedia.org/wiki/Misleading_graph) or this [blog post](https://avoinelama.fi/hingo/kirjoituksia/misleadingvisualizations.html).
4. Matplotlib [tutorials](https://matplotlib.org/stable/tutorials/index.html) and [examples](https://matplotlib.org/stable/gallery/index.html)
5. [Seaborn tutorials](https://www.tutorialspoint.com/seaborn/index.htm)

Remember that **information is aesthetic** - find the beauty in representing the data in a way that is easy to perceive.

### 5. Ease of Reproducibility

Poor reproducibility is a major issue in data science projects, both in the industry and academia, but is often overlooked at.
We at the city of Helsinki as a public sector operators highly value reproducibility. We believe it benefits everyone.
Our goal is, that each state and decision of our ML models are reproducible.
A theoretical possibility of recreating a particular result is not enough, if it takes unreasonable efforts to do it.
Good reproducibility equals to ease of reproducibility.

For ease of reproducibility we 

1. Document
2. Seed
3. Orchestrate (pipeline)
4. Version control everything.

--- 
** INFO BOX: Documentation, Seeding, Orchestration and Version control **

*Documentation*

Documentation means, that everything in a ML project is explained in a text (up to a reasonable level).
This includes commenting code, but also adding relevant references, explaining the maths if needed, and introducing the logic and reasoning between every step.
In addition, you should consider your metadata - the project folder structure, naming policy etc.
To help you with documentation, you can ask yourself "what am I doing and why?" when coding,
and "what does this mean?" every time you get results, be it an intermediate step in data cleansing or the final results of your workflow.
Then, write the answers down, and ask your *non-tech-savvy* colleague to explain the process and results to you based on your documentation.
Iterate this, until you are happy with their answer, and you'll have great documentation!
With great documentation you can ensure that someone else could actually reproduce the same results you came up with.

*Seed*

Seeding means, that random processes are initialized with a *seed*, also known as *random state*.
Creating random numbers is a difficult task in computer science. Each random number you get from a random number generator,
such as the `np.random`, is actually a *pseudo random* number - number taken from a number sequence.
Bunch of numbers taken from this sequence have properties similar to some taking them from true random distribution.
The sequence is defined by the initial number, the seed, and so if you use the same seed for a random number generator,
you can reproduce the results.

*Orchestration*

Orchestration or *pipeline* means automated workflow control.
The goal is, that with a single command you can run all steps of your workflow,
instead of trying to rerun individual cells or notebooks.
It means, that with the same code and same data,
you can always reproduce the same results, even if your code isn't all in a single script.
It helps you to automate the training of ML models in production,
but also when testing your model in development.
An orchestrated workflow is excecuted on a trigger event.
They can either be static or dynamic. A static workflow executes all steps on the trigger event.
Most applications have static workflows.
This is ok, if you have a static data source (the data can change) and your processing steps are computationally light.
Dynamic workflows only execute the steps that are required, i.e. the steps,
that are affected by the changes that happened since the last trigger event.
This change can either be in the code or in the data.
For example if you may have a varying number of input sources to read data from at each training round of the algorithm.
Depending on your ML application, you should consider if you want to use static or dynamic orchestration.
We will add examples of both in the `workflow` notebook.

*Version control*

Version control means that you keep track of all changes in your system,
in a reversable way that allows you to step back to a previous version, or make branches to try out options.
Version control allows you to refer to a specific version of your system, making these snapshots reproducible.
We use Git for version control of code, and virtual environments to isolate the code from the environment.
Containerization and data version control are topics we are still working on.

---

There are many great online resources for learning reproducible data science, such as [The Turing Way](https://the-turing-way.netlify.app/welcome.html) and
[Code Refinery](https://coderefinery.org/).

### 6. Data, Model & Loss - the components of a ML workflow

The core of this template constitutes of three notebooks: data, model and loss.
The notebooks running number prefix (`00_data.ipynb` etc.) to emphasize the running order and to improve readability.
Any data project can be resolved by defining these three steps. Together they form a basis for a complete ML workflow from data to trained deployable model.

You might be used to doing all the steps in a single script or notebook,
but separating makes development, explaining the results and debugging much more efficient. 

Each notebook is also a basis for a python module, including tests and documentation.
The `nbdev` tool constructs a python module of each of these notebooks, under the folder `[your_repository]/[your_module]/`
(`ml_project_template/ml_project_template/` in this template).
The name of the module becomes the name of your repository after installing the template following the instructions below
This allows you to share code between your notebooks, or even publish a complete python module, while doing all your development in the notebooks.

**Data**

In the data notebook, the the data is loaded and cleaned, and a basic analysis may be carried out.
With nbdev you can also export data handling functions to be used in other notebooks.
You should also create a small toy dataset to develop and test your algorithm with - no,
trust me, your code won't work for the first n+1 times, and running it with the whole dataset will waste so much time!
This is also why we separate between the model and loss notebooks.

**Model**

In the model notebook, the machine learning model (or analytics or simulation) is explored, defined and tested.
You can begin with scripting, but based on the script you should develop real generalizable and tested code.
This part of the notebooks is the closest to traditional software development it gets: the output is a clean Python module. 


**Loss**

In the loss notebook, you will finally train your model with the whole dataset and evaluate it in action.
Some might call this step *inference*, others *evaluation*.
No matter the name, you evaluate the performance of your model to see if it is ready for production.
If the results are satisfactory, you can ship your code to it's destination.
For example Azure SDK allows you to define your code in Python and then excecute it in the cloud, seamlessly.
However, this part depends a lot on the project, so we'll leave it to you to figure it out.
If your are doing research, having the results in the notebooks might be enough for you.

**Workflow**

We added the fourth notebook to enable automatic workflow control of the notebooks.
With the help of this notebook, you can create workflows to automatically update, train and deploy your ML model.
The workflows can either be static or dynamic, and you can even parameterize them to automatically update your workflow definition.
Usually this notebook is the last one you need to touch, so you don't need to mind it in the beginning.
However, if you have multiple or varying number of data sources, or a very complex workflow,
you might want to define a dynamic workflow already in the early development phase.

You can also create new notebooks to your liking. For example, if you want to create and create many algorithms that are inheritantly different
it might be better to separate them in their own notebooks `02a_model1.ipynb` and `02b_model2.ipynb`.

---

**INFO BOX: Some useful commands with git**


    git status #See which files have changes since the last commit: `git status` 

    git add [filenames separated by whitespace ' '] # Add files to a commit. * will add all files, and . will add everythin in a directory 

    git commit -m "[short description of the changes you made]" # Create commit and explain what you changed

    git push origin -u # Push commit to remote repository (GitHub server) 

*A good rule of thumb is to commit every change you make, and push at the end of the day when you stop working!*


    git pull # Load changes that someone else has made

If you are working with a team of people, you will most likely run into conflicts when pushing or pulling code.
This means, that there are overlapping changes in the code. Read more from [Stack Overflow](https://stackoverflow.com/questions/161813/how-to-resolve-merge-conflicts-in-a-git-repository)
or [GitHub docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)
on how to resolve conflicts.


    git rm [file name] # Remove files so that git will also stop tracking them  (`git rm -r [folder]` for folders)

To ignore files or folders from being tracked by git, add them to `.gitignore` file.
In this template the `data` and `results` folders have been added to the `.gitignore`.
We do not want to version them with git, as it will explode the size of the repository. 

Branches are like alternative timelines in your commit history.
They allow you to test out things that radically change the code.


    git branch # Check out current branch

    git branch [branch_name] # Make a new branch

    git checkout [branch name] # Change to another branch


In addition, there are many fancy features for git that enable comparing differences, collaborative work, debugging, automated testing and other crazy things.
However, there are better sources for learning all that stuff, like this [free ebook](https://git-scm.com/book/en/v2).

---
