

/*
<%= EJS %>
Embedded JavaScript templating.

Fast compilation and rendering
Simple template tags: <% %> add any js code

print any code & any js code <%= %>       exa : <%= value.name %>

Custom delimiters (e.g., use [? ?] instead of <% %>)  
Sub-template includes
Ships with CLI
Both server JS and browser support
Static caching of intermediate JavaScript
Static caching of templates
Complies with the Express view system


Tags
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it


<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>


		npm install ejs/hbs 


		Load ejs template in node JS


app.set('view engine','ejs') // load ejs on app

app.get('/about',(_,resp)=>{
   resp.render(`${publicpath}/about`);  // don't use about.ejs
});

Print user

<% if (user) { %>
<h2><%= user.name %></h2>
<% } %>


print loop

<ul>
<% user.Skills.forEach((item)=>{%>
<li><%= item %></li>
<% })%>
</ul>
	  


Layouts

<%- include('header'); -%>  // we can also import file by include()
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer'); -%>

*/



var express=require('express');
var app=express();

const path = require('path');
var publicpath=path.join(__dirname,'public') // public sudhi no path

// use view engine  // name of template engine  npm install ejs 

app.set('view engine','ejs') // load ejs on app

app.get('/',(_,resp)=>{
   resp.render(`${publicpath}/index`);
});

app.get('/about',(_,resp)=>{
  var data=[
		{
			name:'Nirav',
			email:'Nirav@test.com',
			country:'USA',
		   Skills:['php','java','python	']
		},
		{
			
			name:'rajesh',
			email:'rajesh@test.com',
			country:'USA',
		   Skills:['php','java','python	']
		}
	];
   resp.render(`${publicpath}/about`,{data});
});

app.get('/about',(_,resp)=>{
   resp.render(`${publicpath}/about`);
});
app.get('/blog',(_,resp)=>{
   resp.render(`${publicpath}/blog`);
});


app.get('/basic_page',(_,resp)=>{
	var user_obj=[
				{
					name:'Nirav',
					email:'Nirav@test.com',
					country:'USA',
				   Skills:['php','java','python	']
				},
				{
					
					name:'rajesh',
					email:'rajesh@test.com',
					country:'USA',
				   Skills:['php','java','python	']
				}
			];
   resp.render(`${publicpath}/basic_view`,{user_obj});
});



app.listen(3000);