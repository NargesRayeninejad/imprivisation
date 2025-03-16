const titleDisplay = document.getElementById('title-display');
 const getTitleBtn = document.getElementById('get-title-btn');
 const undoBtn = document.getElementById('undo-btn');
 
 const allTitles = [
     "If colors had personalities, which color would be the most dramatic and why?",
     "What would happen if gravity suddenly worked sideways instead of downwards?",
     "If you could have a conversation with any fictional character, who would it be and what would you ask?",
     "Imagine animals could hold a global summit. What would be the main topic of discussion?",
     "If you could invent a new sense, what would it be and how would it enhance your experience of the world?",
     "What kind of music would the trees make if they could sing?",
     "If dreams could be traded like commodities, what kind of dream would be the most valuable?",
     "What would a library look like if it only contained stories that hadn't been written yet?",
     "If you could replace all the clocks in the world with something else, what would it be and how would it work?",
     "What if shadows had their own independent lives, separate from the objects that cast them?",
     "If you could plant a seed that grew a house, what kind of house would it be?",
     "What if the internet existed in physical form, like a giant city? What would it look like?",
     "If you could create a new holiday, what would it celebrate and how would people celebrate it?",
     "What would a world without questions look like?",
     "If you could give every person in the world one piece of advice, what would it be?",
     "What if emotions were visible as colors around people? What would your color be right now?",
     "If you could build a bridge to any point in time, where would it lead?",
     "What would a museum dedicated to forgotten memories look like?",
     "If you could have a conversation with your younger self, what would you say?",
     "What if laughter was a currency? What would be the most valuable joke?",
     "If you could design a wearable device that enhanced empathy, how would it work?",
     "What if every time you told a lie, a flower bloomed? What kind of garden would you have?",
     "If you could create a new flavor that represented a feeling, what feeling would it be and what would it taste like?",
     "What if the stars were actually seeds? What kind of plants would they grow?",
     "If you could travel inside a book, which book would you choose and why?",
     "What would a world without mirrors be like?",
     "If you could give inanimate objects a voice for one day, what would they say?",
     "What if the weather reflected people's moods? What would today's weather be?",
     "If you could invent a new form of communication, what would it be?",
     "What if every time you learned something new, you grew a feather? What kind of bird would you be?",
     "If you could build a city in the clouds, what would it be like?",
     "What if time travel was possible, but only to relive past meals? Which meal would you revisit?",
     "If you could create a machine that translated animal languages, what would you want to know?",
     "What if dreams were actually alternate realities? Which dream would you explore further?",
     "If you could design a school that taught only creativity, what would the curriculum be?",
     "What if every person had a theme song that played whenever they entered a room? What would yours be?",
     "If you could create a new form of art, what would it be?",
     "What if the moon was made of cheese? What kind of cheese would it be?",
     "If you could have a garden that grew ideas instead of plants, what ideas would you cultivate?",
     "What if memories could be downloaded and shared? What memory would you share?",
     "If you could design a new form of transportation that didn't use roads, what would it be?",
     "What if every time you helped someone, you grew a pair of temporary wings? How often would you fly?",
     "If you could create a new planet, what would its defining characteristics be?",
     "What if the world was powered by kindness? How would society function?",
     "If you could create a machine that could predict the future based on emotions, how would it work?",
     "What if books could talk back to you? What kind of conversations would you have?",
     "If you could design a new form of entertainment that engaged all the senses, what would it be?",
     "What if every person had a personal cloud that stored their best moments? What would yours contain?",
     "If you could create a new form of education that focused on self-discovery, what would it look like?",
     "What if every time you faced a fear, you gained a superpower? What superpowers would you have?",
     "If you could create a new form of social interaction that didn't involve words, what would it be?",
     "What if the world was made of edible materials? What would your favorite part be?",
     "If you could design a new form of meditation that involved all the senses, what would it be like?",
     "What if every time you expressed gratitude, you generated light? How bright would your world be?",
     "If you could create a new form of storytelling that used all the senses, what would it be?",
     "What if the stars were actually portals to other dimensions? Which dimension would you visit?",
     "If you could design a new form of therapy that involved creating art, what would it entail?",
     "What if every time you learned a new skill, you gained a new physical ability? What skills would you learn?",
     "If you could create a new form of communication that transcended language barriers, what would it be?",
     "What if the world was made of living ecosystems that interacted with each other? How would they communicate?",
     "If you could design a new form of exercise that involved creativity and imagination, what would it be?",
     "What if every time you faced a challenge, you gained a new perspective? What perspectives would you have?",
     "If you could create a new form of social media that focused on positive interactions, what would it be?",
     "What if the world was made of interconnected networks of knowledge? How would you navigate it?",
     "If you could design a new form of education that focused on emotional intelligence, what would it look like?",
     "What if every time you expressed vulnerability, you gained a deeper connection with others? How connected would you be?",
     "If you could create a new form of art that involved collaboration with nature, what would it be?",
     "What if the world was made of shifting landscapes that reflected people's collective consciousness? How would it change?",
     "If you could design a new form of therapy that involved exploring alternate realities, what would it entail?",
     "What if every time you embraced change, you gained a new sense of purpose? What purposes would you have?",
     "If you could create a new form of social interaction that fostered empathy and understanding, what would it be?",
     "What if the world was made of interwoven stories that shaped people's lives? How would you write your story?",
     "If you could design a new form of education that focused on cultivating wisdom, what would it look like?",
     "What if every time you expressed compassion, you generated warmth? How warm would your world be?",
     "If you could create a new form of art that involved collaboration with artificial intelligence, what would it be?",
     "What if the world was made of evolving ecosystems that adapted to people's needs? How would they evolve?",
     "If you could design a new form of therapy that involved exploring inner landscapes, what would it entail?",
     "What if every time you embraced uncertainty, you gained a new sense of adventure? What adventures would you have?",
     "If you could create a new form of social interaction that fostered creativity and innovation, what would it be?",
     "What if the world was made of interconnected networks of dreams? How would you navigate your dreams?",
     "If you could design a new form of education that focused on cultivating resilience, what would it look like?",
     "What if every time you expressed gratitude, you generated harmony? How harmonious would your world be?",
     "If you could create a new form of art that involved collaboration with future technologies, what would it be?",
     "What if the world was made of evolving ecosystems that adapted to people's emotions? How would they adapt?",
     "If you could design a new form of therapy that involved exploring collective memories, what would it entail?",
     "What if every time you embraced vulnerability, you gained a deeper connection with yourself? How connected would you be?",
     "If you could create a new form of social interaction that fostered collaboration and cooperation, what would it be?",
     "What if the world was made of interwoven narratives that shaped people's identities? How would you define your identity?",
     "If you could design a new form of education that focused on cultivating curiosity, what would it look like?",
     "What if every time you expressed compassion, you generated empathy? How empathetic would your world be?",
     "If you could create a new form of art that involved collaboration with the universe, what would it be?",
     "What if the world was made of evolving ecosystems that adapted to people's aspirations? How would they adapt?",
     "If you could design a new form of therapy that involved exploring shared realities"
 ];
 
 let remainingTitles = [...allTitles]; // Create a copy to avoid modifying the original
 const usedTitles =;
 let history =; // Array to store the history of displayed titles
 
 function getRandomTitle() {
     if (remainingTitles.length === 0) {
         titleDisplay.textContent = "All titles have been used!";
         getTitleBtn.disabled = true;
         return null;
     }
 
     const randomIndex = Math.floor(Math.random() * remainingTitles.length);
     const selectedTitle = remainingTitles.splice(randomIndex, 1)[0]; // Remove from remaining
     usedTitles.push(selectedTitle);
     return selectedTitle;
 }
 
 function displayTitle() {
     const newTitle = getRandomTitle();
     if (newTitle) {
         titleDisplay.textContent = newTitle;
         history.push(newTitle);
         undoBtn.disabled = false;
     }
     if (remainingTitles.length === 0) {
         getTitleBtn.disabled = true;
     }
 }
 
 function undoLast() {
     if (history.length > 0) {
         const lastTitle = history.pop();
         titleDisplay.textContent = lastTitle;
 
         // Move the title back to remainingTitles and remove from usedTitles
         const indexInUsed = usedTitles.indexOf(lastTitle);
         if (indexInUsed > -1) {
             usedTitles.splice(indexInUsed, 1);
             remainingTitles.push(lastTitle);
             getTitleBtn.disabled = false; // Re-enable the get title button
         }
     }
 
     if (history.length === 0) {
         undoBtn.disabled = true;
         titleDisplay.textContent = "Click 'Get Title' to start!";
     }
 }
 
 getTitleBtn.addEventListener('click', displayTitle);
 undoBtn.addEventListener('click', undoLast);
