for i in ./example/pages/*/*.wxml;
do mv "$i" "${i%.wxml}.ttml";
done
