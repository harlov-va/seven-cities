# «Шесть хрю-town'ов» (:pig_nose::pig_nose::pig::pig::pig::pig2:)



---

Явные недоделки:

1. в компоненте **comment.tsx** идет обращение к DOM (для обнуления) - это надо убрать
2. в нескольких компонентах states остались внутри, их надо вынести в HOC
3. в некоторых компонентах (:grin: comment.tsx) не хватает state
4. разбить reducer на модули: user, data и т.д. 
5. не работает добавление в избранное на странице детальной информации
6. не доделана страница "Избранное"
