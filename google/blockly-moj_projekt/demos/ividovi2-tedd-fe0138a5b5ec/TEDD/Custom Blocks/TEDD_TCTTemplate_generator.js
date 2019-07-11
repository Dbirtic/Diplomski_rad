 
  Blockly.Python['tedd_tcttemplate_blank'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '# -*- coding: utf-8 -*-\n\
####################################################\n\
#\n\
# Created by eMHA\n\
# email: marko.halak@rt-rk.com\n\
# \n\
# Required inputs for test to be executed:\n\
#       - set of PMT output files\n\
#\n\
####################################################\n\
\n\
# Standard module import\n\
\n\
# Loading Global variables must be loaded from Utils.Globals module\n\
\n\
# Optional modules loaded from Utils folder\n\
\n\
##############\n\
# TC Header\n\
##############\n\
\n\
# Examples on how to write parameters in tc_header fields are in projectRelated.py in GUI folder\n\
\n\
tc_header = {\n\
    &#39;ptc_id&#39;    : [],\n\
    &#39;domain&#39;    : &#34;&#34;,\n\
    &#39;type&#39;      : &#34;&#34;,\n\
    &#39;build&#39;     : &#34;&#34;,\n\
    &#39;data_set&#39;  : [&#34;&#34;],\n\
    &#39;cluster&#39;   : [],\n\
    &#39;board&#39;     : [],\n\
    &#39;host&#39;      : [],\n\
    &#39;document&#39;  : &#34;&#34;,\n\
    &#39;tag&#39;       : [],\n\
    &#39;xcp_tp&#39;    : [],\n\
    &#39;download&#39;  : [],\n\
    &#39;deadline&#39;  : 10\n\
}\n\
\n\
#------------------------------------\n\
# Put Test case code here...\n\
#------------------------------------\n\
\n\
def main(results):\n\
\n\
    return results\n\
#------------------------------------';

  return code;
};