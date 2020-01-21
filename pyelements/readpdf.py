from io import StringIO
from pdfminer.layout import LAParams
from pdfminer.high_level import extract_text, extract_text_to_fp

# output_string = StringIO()
# with open('pdfs/linearalgebra.pdf', 'rb') as f:
#     extract_text_to_fp(fin, output_string, laparams=LAParams(), output_type='html', codec=None, page_numbers=10)
    
from collections import defaultdict

#extracting glossary
t = extract_text('pdfs/linearalgebra.pdf', page_numbers=range(0,10))


lines = t[t.find('Chapter'):].splitlines()

def is_roman_num(s):
    # improve later
    return s.startswith('I') or s.startswith('V')

def roman_num_to_int(s):
    k = {I : 1, IV : 4, V : 5, IX : 9, X : 10}
    for c in s:
        pass

gloss = defaultdict(dict)
for line in lines:
    if line.startswith('Chapter'):
        current_chapter = line.strip()
    try:
        if is_roman_num(line):
            c_line = line.split(' ')
            cur_line = ''
            for c in c_line[1:]:
                if not c == '.':
                    cur_line += ' ' + c 
            gloss[current_chapter][c_line[0]] = cur_line.strip()
    except IndexError as e:
        print(e)

print(dict(gloss))