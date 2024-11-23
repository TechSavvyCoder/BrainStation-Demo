# Exercise: CSS Display Property

## Scope
In this exercise, you will test your knowledge and understanding of the display property as well as the box model.

Below are various snippets of CSS and corresponding HTML that all describe a container with various `div` blocks inside.

Your task is to analyze each code snippet, and predict what the spatial arrangement of the content blocks will be when rendered by the browser.

You should be paying close attention to the widths of the blocks and the display property of each element.

To verify your understanding of this code, create an HTML document with `style` tags, and paste the HTML and CSS in their respective places and open the page in your browser.


### Question 1
**CSS**
```CSS
.container{
	width: 1000px;
}
.box{
	width: 400px;
	height: 400px;
	display: block;
}
```

**HTML**
```HTML
<div class="container">
	<div class="box">
	</div>
	<div class="box">
	</div>
	<div class="box">
	</div>		
</div>
```

### Question 2
**CSS**
```CSS
.container{
	width: 1000px;
}

.box{
	width: 400px;
	height: 400px;
}

.box1{
	display: inline-block;
}

.box2{
	display: block;
}
```
**HTML**
```HTML
<div class="container">
	<div class="box box1">
	</div>
	
	<div class="box box2">
	</div>
</div>
```

### Question 3
**CSS**
```CSS
.container{
	width: 1000px;
}

.box{
	width: 400px;
	height: 400px;
	display: inline-block;
}
```
**HTML**
```HTML
<div class="container">
	<div class="box"></div>
	<div class="box"></div>
</div>
```

### Question 4
**CSS**
```CSS
.container{
	width: 1000px;
}

.box{
	width: 400px;
	height: 400px;
}

.box1, .box4{
	display: block;
}

.box2, .box3{
	display: inline-block;		
}
```
**HTML**
```HTML
<div class="container">
	<div class="box box1"></div>
	
	<div class="box box2"></div>
	
	<div class="box box3"></div>
	
	<div class="box box4"></div>
</div>
```

### Question 5
**CSS**
```CSS
.container{
	width: 1000px;
}

.box{
	width: 400px;
	padding: 10px 100px;
	display: inline-block;
}
```
**HTML**
```HTML
<div class="container">
	<div class="box"></div>
	<div class="box"></div>
	<div class="box"></div>
</div>
```

### Question 6
**CSS**
```CSS
.container{
	width: 1000px;
}

.box{
	width: 400px;
	padding: 10px 20px 5px 15px;
	margin: 5px;
}
.box1, .box2, .box3{
	display: inline-block;
}
.box4{
	display: block;
}
```
**HTML**
```HTML
<div class="container">
	<div class="box box1"></div>
	<div class="box box2"></div>
	<div class="box box3"></div>		
	<div class="box box4"></div>		
</div>
```

### Question 7
**CSS**
```CSS
.container{
	width: 1000px;
}

.box{
	width: 200px;
	height: 300px;
	margin: 10px 20px;
	display: inline-block;
}

#thatBox{
	margin: 20px 200px;
}
```
**HTML**
```HTML
<div class="container">
	<div class="box"></div>
	<div class="box"></div>
	<div class="box" id="thatBox"></div>
	<div class="box"></div>
	<div class="box"></div>				
</div>
```