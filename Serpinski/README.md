# Sierpiński triangle
>The **Sierpiński triangle** (sometimes spelled Sierpinski), also called the Sierpiński gasket or Sierpiński sieve, is a fractal attractive fixed set with the overall shape of an equilateral triangle, subdivided recursively into smaller equilateral triangles.
![](https://www.robertdickau.com/striangle.png)

# **L-systems** 
**L-systems**  (also called Lindenmayer systems or parallel string-rewrite systems) are a compact way to describe iterative graphics using a turtle analogy, similar to that used by the LOGO programming language. An L-system is created by starting with an axiom, such as a line segment, and one or more production rules, which are statements such as “replace every line segment with a left turn, a line segment, a right turn, another segment...”. When this system is iterated several times, the result is often a complicated fractal curve.

>The **L-systems** code representation of  **Sierpiński triangle**  is <br/>
        F -> FF, <br/>
        X -> --FXF++FXF++FXF--, <br/>
       angle made intially with respect to the origin is 60°<br/>
  
  We use two lines of string and we replace and itterate the strings with [strrep](https://www.mathworks.com/help/matlab/ref/strrep.html) of [MATLAB](https://www.mathworks.com/)
  
  when we came across the character '*F*' or '*X*' we draw a straight line from the old point to the new point in the logic of <br/>
        newx=oldx+cos((alpha));<br/>
        newy=oldy+sin((alpha));<br/>
   where alpha is the intial angle which must be made with origin
   alpha=alpha+delta
  where delta must be made 
   when we came across the character '+' we add 
 
 >Strg='X';<br/>
  Strx=' --FXF++FXF++FXF--';<br/>
  Strf='FF';<br/>
  Str1=strrep(strrep(strrep(Strg,'X','1'),'F',Strf),'1',Strx); In<br/>
  n=length(Str1) in order to iterate the loop until length of the string <br/>
  index=0;<br/>
  % following three arrays are to track branching in the tree<br/>
  % we do not use stack<br/>
  posx(1)=0; %Initialize. Also tell matlab posx is an array<br/>
  posy(1)=0; %Initialize. Also tell matlab posy is an array<br/>
  posa(1)=0;%Initialize. Also tell matlab posa is an array<br/>
  % following variables are for drawing line segment<br/>
  oldx=0;<br/>
  oldy=0;<br/>
  newx=0;<br/>
  newy=0;<br/>
% after plotting a segment, newx and newy become oldx and oldy<br/>
alpha=0;<br/>
delta=60;<br/>
figure<br/>
for i=1:n<br/>
comd=Str1(i);<br/>
switch(comd)<br/>
case 'F'<br/>
newx=oldx+cos(deg2rad(alpha));<br/>
newy=oldy+sin(deg2rad(alpha));<br/>
line([oldx newx],[oldy newy],'Color','black','LineStyle','-','LineWidth',1);<br/>
%drawnow;<br/>
oldx=newx;<br/>
oldy=newy;<br/>
case 'X'<br/>
newx=oldx+cos(deg2rad(alpha));<br/>
newy=oldy+sin(deg2rad(alpha));<br/>
line([oldx newx],[oldy newy],'Color','black','LineStyle','-','LineWidth',0.5);<br/>
hold on<br/>
plot(newx,newy,'-','MarkerSize',2.5, 'MarkerFaceColor','y')<br/>
%drawnow;<br/>
oldx=newx;<br/>
oldy=newy;<br/>
case '+'<br/>
alpha=alpha+delta;<br/>
case '-'<br/>
alpha=alpha-delta;<br/>
end<br/>
end<br/>
