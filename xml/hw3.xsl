<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:output method="html"/>

<xsl:template match="/">
   <html>
        <head>
        <title>List of Clients</title>
            <style>
            table, td { border: 2px solid blue; } 
            td, th { padding: 5px; }
            .Account_Total {
                text-align: right;
            }
            </style>
        </head>
   <body><h1 style="font-weight: bold; ">List of Clients</h1>

   <table><tr><th>Name</th><th>Phone</th><th>E-mail</th><th>Account_Total</th></tr>
   
   <xsl:for-each select="Accounts/Client">
      <xsl:sort select="Name/Last" order="ascending" />
        
         <tr><td>
         
         <xsl:value-of select="Name/First"/> &#160;
         <xsl:value-of select="Name/Last"/></td>
		 <td><xsl:value-of select="Phone"/></td>
       <td><xsl:value-of select="E-mail"/></td>
       
       <xsl:choose>
		    <xsl:when test="Account_Total &gt; 80000">
             <td class="Account_Total" >$<xsl:value-of select="Account_Total"/></td>
			</xsl:when>
			<xsl:otherwise>
			   <td class="Account_Total" style="color:red;">$<xsl:value-of select="Account_Total"/></td>
			</xsl:otherwise>
	     </xsl:choose>
            </tr>
   </xsl:for-each>   
   
   </table>
   
   </body></html>
</xsl:template>
</xsl:stylesheet>


    