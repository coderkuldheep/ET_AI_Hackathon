export default function machineColor(score){

    if(score>=90)
        return "#00e676";

    if(score>=75)
        return "#76ff03";

    if(score>=60)
        return "#ffd600";

    if(score>=40)
        return "#ff9100";

    return "#ff1744";

}