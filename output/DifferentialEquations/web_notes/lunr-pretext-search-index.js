var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "diffeq-notes-1-1",
  "level": "1",
  "url": "diffeq-notes-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "What are Differential Equations?",
  "body": " What are Differential Equations?    Students will be able to...    Classify differential equations by their type, order, linearity, and homogeneity.      A differential equation is any equation that contains the derivatives of oneor more unknown functions with respect to one or more independent variables.      A DE that has only one dependent variable is called ordinary . Otherwise, it is called partial .      The order of a DE is the highest order of derivative that appears in the equation.      A DE is linear if the coefficient for each dependent variable and each of its derivatives can be expressed in terms of only the independent variables (or constants).      A linear DE is homogeneous if it can be written in the form If there is a nonzero RHS, we call the equation nonhomogeneous .    "
},
{
  "id": "diffeq-notes-1-1-2",
  "level": "2",
  "url": "diffeq-notes-1-1.html#diffeq-notes-1-1-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  Students will be able to...    Classify differential equations by their type, order, linearity, and homogeneity.   "
},
{
  "id": "def-DE",
  "level": "2",
  "url": "diffeq-notes-1-1.html#def-DE",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A differential equation is any equation that contains the derivatives of oneor more unknown functions with respect to one or more independent variables.   "
},
{
  "id": "def-type",
  "level": "2",
  "url": "diffeq-notes-1-1.html#def-type",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  A DE that has only one dependent variable is called ordinary . Otherwise, it is called partial .   "
},
{
  "id": "def-order",
  "level": "2",
  "url": "diffeq-notes-1-1.html#def-order",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  The order of a DE is the highest order of derivative that appears in the equation.   "
},
{
  "id": "def-linear",
  "level": "2",
  "url": "diffeq-notes-1-1.html#def-linear",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  A DE is linear if the coefficient for each dependent variable and each of its derivatives can be expressed in terms of only the independent variables (or constants).   "
},
{
  "id": "def-homogeneous",
  "level": "2",
  "url": "diffeq-notes-1-1.html#def-homogeneous",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "  A linear DE is homogeneous if it can be written in the form If there is a nonzero RHS, we call the equation nonhomogeneous .   "
},
{
  "id": "diffeq-notes-1-2",
  "level": "1",
  "url": "diffeq-notes-1-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "What are Differential Equations?",
  "body": " What are Differential Equations?    Students will be able to...    Verify solutions to differential equations.  Find intervals of existence for solutions to differential equations.  Use initial conditions to determine parameters in families of solutions.      Consider the -order differential equation We say that is a solution to the differential equation on the interval provided it makes and identity. We call the interval of existence for the solution.      Observe that is a solution to the ODE on since But notice that adding any constant coefficient to is also a solution.      Solutions to ODEs that contain arbitrary constants (parameters) are called families of solutions. If there are such constants, we call those solutions  -parameter families of solutions . When specific values for the parameters are chosen, we call the resulting solution a particular solutions .      Consider the problem of solving on subject to the conditions where . We call this an initial value problem (IVP) on account of the additional initial conditions (IC's) .    Note the -order equation has initial conditions involving its first derivatives all evaluated at the same point. Also notice that solving everywhere is inherently baked into the definition of IVP. In practice, we use these IC's to determine particular solutions.  "
},
{
  "id": "diffeq-notes-1-2-2",
  "level": "2",
  "url": "diffeq-notes-1-2.html#diffeq-notes-1-2-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  Students will be able to...    Verify solutions to differential equations.  Find intervals of existence for solutions to differential equations.  Use initial conditions to determine parameters in families of solutions.   "
},
{
  "id": "def-solution",
  "level": "2",
  "url": "diffeq-notes-1-2.html#def-solution",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Consider the -order differential equation We say that is a solution to the differential equation on the interval provided it makes and identity. We call the interval of existence for the solution.   "
},
{
  "id": "diffeq-notes-1-2-4",
  "level": "2",
  "url": "diffeq-notes-1-2.html#diffeq-notes-1-2-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Observe that is a solution to the ODE on since But notice that adding any constant coefficient to is also a solution.   "
},
{
  "id": "def-family-of-solutions",
  "level": "2",
  "url": "diffeq-notes-1-2.html#def-family-of-solutions",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  Solutions to ODEs that contain arbitrary constants (parameters) are called families of solutions. If there are such constants, we call those solutions  -parameter families of solutions . When specific values for the parameters are chosen, we call the resulting solution a particular solutions .   "
},
{
  "id": "def-ivps",
  "level": "2",
  "url": "diffeq-notes-1-2.html#def-ivps",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  Consider the problem of solving on subject to the conditions where . We call this an initial value problem (IVP) on account of the additional initial conditions (IC's) .   "
},
{
  "id": "diffeq-notes-1-3",
  "level": "1",
  "url": "diffeq-notes-1-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "When would I use Differential Equations?",
  "body": " When would I use Differential Equations?    Students will be able to...    Model real-world phenomena using 1st-order ODEs and IVPs.      Problem: The population growth rate of a country grows proportionally to its existing population. Model this phenomenon using a 1st-order ODE.   Solution: Since for some .     Problem: Find a solution to the model by inspection.   Solution:  for some .     Problem: Now suppose that individuals are permitted to immigrate into the country per year. How does this affect the model?   Solution: Suppose . Then . Then   Alternatively, we could just write    "
},
{
  "id": "diffeq-notes-1-3-2",
  "level": "2",
  "url": "diffeq-notes-1-3.html#diffeq-notes-1-3-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  Students will be able to...    Model real-world phenomena using 1st-order ODEs and IVPs.   "
},
{
  "id": "diffeq-notes-1-3-3",
  "level": "2",
  "url": "diffeq-notes-1-3.html#diffeq-notes-1-3-3",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  Problem: The population growth rate of a country grows proportionally to its existing population. Model this phenomenon using a 1st-order ODE.   Solution: Since for some .  "
},
{
  "id": "diffeq-notes-1-3-4",
  "level": "2",
  "url": "diffeq-notes-1-3.html#diffeq-notes-1-3-4",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Problem: Find a solution to the model by inspection.   Solution:  for some .  "
},
{
  "id": "diffeq-notes-1-3-5",
  "level": "2",
  "url": "diffeq-notes-1-3.html#diffeq-notes-1-3-5",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Problem: Now suppose that individuals are permitted to immigrate into the country per year. How does this affect the model?   Solution: Suppose . Then . Then   Alternatively, we could just write   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
