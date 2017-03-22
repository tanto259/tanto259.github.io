var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? 'https://tanto259.name/assets/css/reveal/pdf.css' : 'https://tanto259.name/assets/css/reveal/paper.css' ;
link.integrity = window.location.search.match( /print-pdf/gi ) ? 'sha512-BIUwppm1A+iFFEUCf7eGD/ZZnyQbaf8/w0UJ6UOqvHzgd3jiuKB6I18DmAIZ7+XzteI09wwgWq9dcSjB49YNhA==' : 'sha512-0rc/pmg5ec+OT9yghwTDeOeIPR0qCeDpWAsMI4SIWTUcX1EBYG/w7OfG5vin16Sb0YgvS5jSCC8g+zD+BONMGQ==';
link.crossOrigin = 'anonymous';
document.getElementsByTagName( 'head' )[0].appendChild( link );